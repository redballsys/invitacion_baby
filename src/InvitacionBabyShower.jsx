import { motion } from "framer-motion";
import { Card, CardContent } from './components/ui/card'
import { MapPin, Calendar, Clock, Gift, Heart } from "lucide-react";

const PALETTE = {
    blush: "#EACFD3",
    rose: "#E0BEC3",
    linen: "#FCF2F2",
    petal: "#FCF2F0",
    mist: "#F2E7E8",
};

const bubbles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: 14 + Math.round(Math.random() * 18),
    x: Math.round(Math.random() * 100),
    delay: Math.random() * 3,
    duration: 6 + Math.random() * 6,
    opacity: 0.25 + Math.random() * 0.4,
}));

export default function InvitacionBabyShower() {
    return (
        <div
            className="min-h-screen w-full bg-gradient-to-b from-white via-[--petal] to-[--linen] flex items-stretch justify-center"
            style={{
                '--blush': PALETTE.blush,
                '--rose': PALETTE.rose,
                '--linen': PALETTE.linen,
                '--petal': PALETTE.petal,
                '--mist': PALETTE.mist,
            }}
        >
            <div className="w-full max-w-sm px-4 py-6 relative overflow-hidden">
                {bubbles.map((b) => (
                    <motion.span
                        key={b.id}
                        initial={{ y: 400 }}
                        animate={{ y: -150 }}
                        transition={{ duration: b.duration, delay: b.delay, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                        className="absolute rounded-full blur-md"
                        style={{
                            left: `${b.x}%`,
                            width: b.size,
                            height: b.size,
                            background: `radial-gradient(circle at 30% 30%, ${PALETTE.linen}, ${PALETTE.mist})`,
                            opacity: b.opacity,
                        }}
                    />
                ))}

                <Card className="relative border-0 shadow-xl rounded-2xl overflow-hidden bg-white/80 backdrop-blur">
                    <div className="absolute inset-0 pointer-events-none" aria-hidden>
                        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full" style={{ background: `radial-gradient(${PALETTE.blush}, transparent)` }} />
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full" style={{ background: `radial-gradient(${PALETTE.rose}, transparent)` }} />
                    </div>

                    <CardContent className="p-6 text-center">
                        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                            <div className="mx-auto mb-3 w-16 h-16 rounded-full flex items-center justify-center bg-[--blush]/40">
                                <Gift className="w-8 h-8 text-[--rose]" />
                            </div>

                            <motion.p
                                className="tracking-widest text-xs text-neutral-500"
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                BABY SHOWER
                            </motion.p>

                            <motion.h1
                                className="text-3xl font-extrabold tracking-tight bg-clip-text text-transparent mt-1"
                                style={{ backgroundImage: `linear-gradient(180deg, ${PALETTE.rose}, ${PALETTE.blush})` }}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                ¡Estamos de fiesta!
                            </motion.h1>

                            <motion.img
                                src="/mnt/data/2692d1a4ffe9b4531089ac72846c7919.jpg"
                                alt="Osito con globos"
                                className="mx-auto mt-3 w-40 h-auto select-none pointer-events-none drop-shadow"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            />

                            <motion.div
                                className="mt-6 text-neutral-600 text-sm leading-relaxed px-4"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1 }}
                            >
                                <p>Te invitamos al Baby Shower para celebrar que muy pronto seremos bendecidos con la llegada de</p>
                                <motion.p
                                    className="text-3xl font-extrabold italic text-center my-2 bg-clip-text text-transparent"
                                    style={{ backgroundImage: 'linear-gradient(90deg, #E0BEC3, #ffffff, #E0BEC3)', backgroundSize: '200% auto' }}
                                    animate={{ backgroundPosition: ['200% center', '-200% center'] }}
                                    transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
                                >
                                    Daniela Arleth
                                </motion.p>
                            </motion.div>

                            <motion.img
                                src="/mnt/data/33bef1b8-167b-4759-a454-3dcc5d43fe1a.png"
                                alt="Decoración de globos y nubes"
                                className="mx-auto mt-3 w-44 h-auto select-none pointer-events-none drop-shadow"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 1.2 }}
                            />

                            <motion.div
                                className="mt-6 text-neutral-600 text-sm leading-relaxed px-4"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1.4 }}
                            >
                                <p>
                                    El amor se multiplica y en la familia habrá una sonrisa iluminando nuestras vidas. Con amor e ilusión esperamos su llegada. ¡Gracias por ser parte de esta alegría!
                                </p>
                            </motion.div>

                            <motion.div
                                className="mt-6 text-neutral-600 text-sm leading-relaxed px-4"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1.6 }}
                            >
                                <p className="text-xs text-neutral-500 mb-1">Sus papitos</p>
                                <p className="text-3xl font-extrabold italic text-center mb-3" style={{ color: '#E0BEC3', WebkitTextStroke: '0.5px #c4979e', textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>
                                    Reyna Martínez & Daniel Avendaño
                                </p>
                                <p>
                                    Estamos muy felices y nos gustaría que estén en la primera fiestita que haremos en su honor para darle la bienvenida al mundo.
                                </p>
                            </motion.div>

                            {/* Bloque de fecha/hora/lugar */}
                            <motion.div
                                className="mt-6 text-neutral-600 text-sm leading-relaxed px-4"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1.8 }}
                            >
                                <p className="text-base font-medium text-neutral-700 mb-3">Te esperamos el día:</p>
                                <div className="flex items-center justify-center gap-8">
                                    <div className="text-center">
                                        <p className="text-xs text-neutral-600 tracking-wide">VIERNES</p>
                                        <p className="text-4xl font-bold text-[--rose] leading-none">06</p>
                                        <p className="text-xs text-neutral-600 tracking-wide">DIC.</p>
                                    </div>
                                    <div className="h-10 w-[1px] bg-[--rose]/40"></div>
                                    <div className="text-center">
                                        <p className="text-xs text-neutral-600 tracking-wide">02:00 HS</p>
                                        <p className="text-xs text-neutral-600 tracking-wide">PM</p>
                                    </div>
                                </div>
                                <p className="mt-4 text-sm text-neutral-700 leading-snug">Calle 83, N° 124<br />Col. Chamizal, Santa Lucía del Camino</p>
                                <a
                                    href="https://www.google.com/maps/dir//FERROCARRIL,+Chamizal,+71243+Santa+Luc%C3%ADa+del+Camino,+Oax./@17.0616006,-96.7017764,15.75z/data=!4m18!1m8!3m7!1s0x85c723b7d366d885:0x6319a5ae68c940!2sFERROCARRIL,+Chamizal,+71243+Santa+Luc%C3%ADa+del+Camino,+Oax.!3b1!8m2!3d17.061501!4d-96.6987353!16s%2Fg%2F1tgfdp_g!4m8!1m0!1m5!1m1!1s0x85c723b7d366d885:0x6319a5ae68c940!2m2!1d-96.6987353!2d17.061501!3e9?entry=ttu&g_ep=EgoyMDI1MTEwMi4wIKXMDSoASAFQAw%3D%3D"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="block mt-4 mx-auto w-max bg-[--rose] hover:bg-[--blush] text-white font-medium text-sm py-2 px-5 rounded-full shadow-md"
                                >
                                    Cómo llegar
                                </a>
                            </motion.div>

                            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="mt-8">
                                <p className="text-[11px] text-center text-neutral-500 mt-3">Sugerencia de regalo:</p>
                                <a
                                    href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51749453"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="block text-center text-sm font-medium text-[--rose] underline mt-1"
                                >
                                    N° de evento Liverpool 51749453
                                </a>
                                <p className="mt-4 text-sm text-[--rose] italic">¡No faltes! ¡Te esperamos con mucho cariño!</p>
                            </motion.div>
                        </motion.div>
                    </CardContent>
                </Card>

                <div className="text-center text-[10px] text-neutral-400 mt-4">Hecho con 💖 para ver en móvil</div>
            </div>
        </div>
    );
}
