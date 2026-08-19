/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Check, ShieldCheck, AlertTriangle, Timer, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

export default function App() {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes countdown

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-red-600 selection:text-white overflow-x-hidden relative">
      {/* Back Button */}
      <a 
        href="https://pay.kiwify.com.br/XVrrBeT"
        className="absolute top-14 left-4 z-50 flex items-center gap-1 text-zinc-500 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest no-underline bg-white/5 px-3 py-2 rounded-lg border border-white/10"
      >
        <Zap className="w-3 h-3" /> Back
      </a>
      <div className="bg-red-600 text-white py-2 px-4 text-center text-xs font-bold uppercase tracking-widest animate-pulse">
        ⚠️ Atenção: Não atualize esta página. Esta oferta expirará em instantes.
      </div>

      <main className="max-w-md mx-auto px-6 py-10 flex flex-col items-center text-center">
        
        {/* Urgent Headline */}
        <motion.header
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-[10px] font-bold uppercase tracking-tighter mb-4">
            <AlertTriangle className="w-3 h-3" /> Oferta Única e Exclusiva
          </div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tighter leading-none uppercase italic">
            ESPERE! <br />
            <span className="text-red-600">NÃO SAIA</span> AINDA.
          </h1>
        </motion.header>

        {/* Persuasive Sub-headline */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8 space-y-4"
        >
          <p className="text-lg font-bold leading-tight">
            Entendemos que o preço pode ter sido um obstáculo. Por isso, tomamos uma decisão radical.
          </p>
          <p className="text-sm opacity-70 leading-relaxed">
            Não queremos que você perca a oportunidade de fortalecer sua fé por causa de alguns reais. Esta é a nossa <span className="text-white font-bold underline decoration-red-600">última tentativa</span> de te ajudar.
          </p>
        </motion.section>

        {/* Countdown Timer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl mb-8"
        >
          <Timer className="w-4 h-4 text-red-500" />
          <span className="text-sm font-mono font-bold tracking-tighter">
            ESTA PÁGINA SE FECHARÁ EM: <span className="text-red-500">{formatTime(timeLeft)}</span>
          </span>
        </motion.div>

        {/* The "Black" Offer Box */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="w-full bg-gradient-to-b from-zinc-900 to-black rounded-3xl p-8 border border-zinc-800 mb-8 relative overflow-hidden shadow-2xl shadow-red-900/20"
        >
          {/* Background Glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-red-600/10 blur-[80px]" />
          
          <div className="relative z-10">
            <h2 className="text-xs uppercase tracking-[0.3em] font-black mb-6 text-zinc-500">Acesso Vitalício Liberado</h2>
            
            <div className="flex flex-col items-center mb-8">
              <span className="text-xs line-through text-zinc-600 mb-1 font-bold uppercase tracking-tighter">DE R$ 27,90 POR R$ 19,90</span>
              <div className="flex items-baseline gap-1">
                <span className="text-sm font-bold text-red-600 uppercase tracking-tighter">Apenas</span>
                <span className="text-7xl font-black tracking-tighter text-white">R$ 9,90</span>
              </div>
              <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 mt-2">
                Pagamento único. Sem pegadinhas.
              </p>
            </div>

            <ul className="space-y-4 text-left mb-8 border-t border-zinc-800 pt-8">
              {[
                "Tudo o que foi prometido anteriormente",
                "Acesso imediato e sem mensalidades",
                "Bônus exclusivos de boas-vindas",
                "Suporte prioritário via comunidade"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 bg-red-600 rounded-full p-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm font-medium text-zinc-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* High-Impact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="w-full space-y-6"
        >
          <a 
            href="https://pay.kiwify.com.br/XVrrBeT"
            className="group relative w-full bg-red-600 hover:bg-red-700 text-white font-black py-6 rounded-2xl shadow-[0_0_40px_rgba(220,38,38,0.3)] transition-all active:scale-[0.98] uppercase tracking-tighter text-lg flex items-center justify-center gap-3 overflow-hidden no-underline"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            <Zap className="w-5 h-5 fill-current" />
            QUERO MEU ACESSO AGORA
          </a>
          
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4 text-green-500" />
              Garantia Total de 7 Dias ou seu dinheiro de volta
            </div>
            
            <div className="flex gap-4 opacity-30 grayscale contrast-125">
              <img src="https://picsum.photos/seed/visa/40/25" alt="Visa" className="h-4" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/master/40/25" alt="Master" className="h-4" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/pix/40/25" alt="Pix" className="h-4" referrerPolicy="no-referrer" />
            </div>
          </div>
        </motion.div>

        {/* Scarcity Footer */}
        <p className="mt-12 text-[10px] text-zinc-600 font-medium max-w-[280px] leading-relaxed uppercase tracking-tighter">
          *Esta oferta é gerada dinamicamente para o seu perfil. Se você fechar esta janela, o desconto de 65% será permanentemente removido.
        </p>

      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </div>
  );
}


