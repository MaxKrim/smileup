"use client";

import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(1, "Pour- en achternaam is verplicht."),
  email: z.string().email("Voer een geldig e-mailadres in.").min(1, "E-mail is verplicht."),
  phone: z.string().optional(),
  message: z.string().min(1, "Bericht is verplicht."),
  privacy: z.literal(true, {
    errorMap: () => ({ message: "Je moet de privacyvoorwaarden accepteren." }),
  }),
});

type FormData = z.infer<typeof formSchema>;

const InputSuccessIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.25 8.125L10.625 13.75L7.5 10.625" stroke="#5CDEAB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const InputErrorIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.75 5L5 18.75" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 5L18.75 18.75" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const CheckboxCheckIcon = ({ className }: { className?: string }) => (
  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M8.75 0.9375L3.125 6.5625L0.625 4.0625" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SubmitArrowIcon = ({ className }: { className?: string }) => (
  <svg width="18" height="18" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12.9844 5.9375L18.0469 11L12.9844 16.0625" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
    <path d="M18.0469 11H3.95312" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
  </svg>
);


const ContactForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const { register, handleSubmit, formState: { errors, touchedFields, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onTouched",
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // In a real app, you would send this data to a server
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(data);
    onSuccess();
  };

  const fieldState = (name: keyof FormData) => {
    if (touchedFields[name] && !errors[name]) return 'success';
    if (touchedFields[name] && errors[name]) return 'error';
    return 'default';
  };

  return (
    <>
      <h2 className="font-display text-4xl leading-tight -tracking-[0.06em] font-medium text-text-primary">Leave us a message</h2>
      <div className="mt-8">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
          <div>
            <label htmlFor="Naam" className="text-sm font-medium text-text-primary mb-2 block">Voor- en achternaam *</label>
            <div className="relative">
              <input id="Naam" {...register("name")} className="w-full bg-white border border-black/10 rounded-lg p-4 text-base focus:ring-2 focus:ring-brand-blue focus-visible:outline-none pr-10" />
              <div className="absolute inset-y-0 right-3 flex items-center">
                {fieldState('name') === 'success' && <InputSuccessIcon />}
                {fieldState('name') === 'error' && <InputErrorIcon />}
              </div>
            </div>
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="E-mail" className="text-sm font-medium text-text-primary mb-2 block">E-mail *</label>
            <div className="relative">
              <input id="E-mail" type="email" {...register("email")} className="w-full bg-white border border-black/10 rounded-lg p-4 text-base focus:ring-2 focus:ring-brand-blue focus-visible:outline-none pr-10" />
              <div className="absolute inset-y-0 right-3 flex items-center">
                {fieldState('email') === 'success' && <InputSuccessIcon />}
                {fieldState('email') === 'error' && <InputErrorIcon />}
              </div>
            </div>
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <div className="flex justify-between items-baseline mb-2">
                <label htmlFor="Telefoonnummer" className="text-sm font-medium text-text-primary">Telefoonnummer</label>
                <span className="text-xs text-muted-foreground">Optioneel</span>
            </div>
            <div className="relative">
              <input id="Telefoonnummer" type="tel" {...register("phone")} className="w-full bg-white border border-black/10 rounded-lg p-4 text-base focus:ring-2 focus:ring-brand-blue focus-visible:outline-none pr-10" />
              <div className="absolute inset-y-0 right-3 flex items-center">
                 {touchedFields['phone'] && !errors['phone'] && <InputSuccessIcon />}
              </div>
            </div>
          </div>
          
          <div>
            <label htmlFor="Bericht" className="text-sm font-medium text-text-primary mb-2 block">Bericht *</label>
            <div className="relative">
              <textarea id="Bericht" {...register("message")} rows={4} className="w-full bg-white border border-black/10 rounded-lg p-4 text-base resize-y focus:ring-2 focus:ring-brand-blue focus-visible:outline-none pr-10"></textarea>
               <div className="absolute top-4 right-3 flex items-center">
                {fieldState('message') === 'success' && <InputSuccessIcon />}
                {fieldState('message') === 'error' && <InputErrorIcon />}
              </div>
            </div>
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
          </div>

          <div className="pt-4">
            <div className="w-full h-px bg-border"></div>
          </div>

          <div>
            <label className="flex items-center cursor-pointer group">
              <input type="checkbox" {...register("privacy")} className="peer sr-only" />
              <div className="w-5 h-5 border-2 border-black rounded-sm flex-shrink-0 flex items-center justify-center mr-3 peer-checked:bg-accent peer-checked:border-accent transition-colors duration-200">
                <CheckboxCheckIcon className="text-white hidden peer-checked:block" />
              </div>
              <span className="text-sm text-text-primary">
                Ik accepteer de <a href="#" className="underline hover:no-underline">Privacyvoorwaarden</a>
                <span className="text-red-500"> *</span>
              </span>
            </label>
            {errors.privacy && <p className="text-red-500 text-xs mt-1">{errors.privacy.message}</p>}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full sm:w-auto h-14 px-8 flex items-center justify-center rounded-full bg-brand-orange text-white overflow-hidden transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="relative z-10 text-base font-medium">
                {isSubmitting ? 'Versturen...' : 'Verstuur bericht'}
              </span>
              <div className="relative z-10 ml-2 w-[18px] h-[18px] transition-transform duration-300 group-hover:translate-x-1">
                <SubmitArrowIcon />
              </div>
            </button>
            <p className="font-bold text-text-secondary text-base">Of bel <a href="tel:+33777995315" className="underline hover:no-underline">+33 7 77 99 53 15</a></p>
          </div>
        </form>
      </div>
    </>
  );
};

const SuccessMessage = () => {
    return (
        <div className="flex flex-col items-center text-center py-8">
            <div className="relative w-16 h-16 bg-brand-green/20 rounded-full flex items-center justify-center mb-6">
                <InputSuccessIcon />
            </div>
            <div className="max-w-md">
                <h1 className="font-display text-5xl lg:text-6xl -tracking-[0.06em] font-medium text-text-primary">Thanks voor je bericht!</h1>
            </div>
            <div className="max-w-[45ch] mt-4">
                <p className="text-text-secondary text-lg">We hebben je bericht ontvangen en komen snel bij je terug. Get ready to get hyped 🔥.</p>
            </div>
        </div>
    );
};

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 font-body animate-in fade-in"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative bg-white text-primary rounded-3xl p-8 sm:p-12 w-[calc(100%-48px)] max-w-2xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] animate-in fade-in-90 zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-4 right-4">
            <button
                onClick={onClose}
                className="group relative h-11 px-6 flex items-center justify-center rounded-full border-2 border-black bg-transparent text-black transition-all duration-300 hover:bg-black hover:text-white"
                aria-label="Sluiten"
            >
                <span className="text-sm font-medium">Sluit</span>
            </button>
        </div>

        {isSubmitted ? (
          <SuccessMessage />
        ) : (
          <ContactForm onSuccess={() => setIsSubmitted(true)} />
        )}
      </div>
    </div>
  );
}