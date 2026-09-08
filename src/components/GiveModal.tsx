import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Copy, Check, X } from 'lucide-react';

const accounts = [
  {
    currency: 'Naira',
    number: '0109662496',
    bank: 'GTBank',
    accountName: 'VPWM-TBWF',
  },
  { currency: 'USD', number: '0178803231' },
  { currency: 'Pounds', number: '0178803248' },
];

type GiveModalContextValue = {
  openGiveModal: () => void;
};

const GiveModalContext = createContext<GiveModalContextValue | null>(null);

export function useGiveModal() {
  const ctx = useContext(GiveModalContext);
  if (!ctx) {
    throw new Error('useGiveModal must be used within GiveModalProvider');
  }
  return ctx;
}

export function GiveNowButton({
  className,
  children,
  onClick,
}: {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  const { openGiveModal } = useGiveModal();
  return (
    <button
      type="button"
      onClick={() => {
        onClick?.();
        openGiveModal();
      }}
      className={className}
    >
      {children}
    </button>
  );
}

export function GiveModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  const openGiveModal = useCallback(() => setOpen(true), []);
  const closeGiveModal = useCallback(() => setOpen(false), []);

  return (
    <GiveModalContext.Provider value={{ openGiveModal }}>
      {children}
      <GiveModal open={open} onClose={closeGiveModal} />
    </GiveModalContext.Provider>
  );
}

function GiveModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  const copyNumber = async (number: string) => {
    try {
      await navigator.clipboard.writeText(number);
      setCopied(number);
      window.setTimeout(() => setCopied(null), 2000);
    } catch {
      setCopied(null);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center p-4 sm:items-center">
      <button
        type="button"
        className="absolute inset-0 bg-forest-950/60"
        aria-label="Close giving details"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="give-modal-title"
        className="relative z-10 w-full max-w-md rounded-2xl bg-white p-6 sm:p-8 ring-1 ring-forest-100"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full text-forest-600 transition-colors hover:bg-forest-50 hover:text-forest-900"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <h2
          id="give-modal-title"
          className="pr-10 font-serif text-2xl font-bold text-forest-900"
        >
          Give Now
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-forest-600">
          Transfer to any of the accounts below to donate to TBWF.
        </p>

        <div className="mt-6 space-y-3">
          {accounts.map((account) => {
            const isCopied = copied === account.number;
            return (
              <div
                key={account.number}
                className="rounded-xl bg-cream-50 p-4 ring-1 ring-forest-100"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-600">
                  {account.currency}
                </div>
                {'accountName' in account && account.accountName ? (
                  <p className="mt-1.5 text-sm font-medium text-forest-700">
                    {account.accountName}
                    {'bank' in account && account.bank
                      ? ` · ${account.bank}`
                      : ''}
                  </p>
                ) : null}
                <div className="mt-2 flex items-center justify-between gap-3">
                  <p className="font-mono text-lg font-semibold tracking-wide text-forest-900">
                    {account.number}
                  </p>
                  <button
                    type="button"
                    onClick={() => copyNumber(account.number)}
                    className="inline-flex min-h-10 items-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold text-forest-800 ring-1 ring-forest-200 transition-colors hover:bg-white hover:text-gold-600"
                  >
                    {isCopied ? (
                      <>
                        <Check className="h-3.5 w-3.5" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        Copy
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
