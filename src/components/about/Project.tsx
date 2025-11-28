import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InfiniteMenu from "./InfiniteMenu";
import img1 from '@/assets/Lanyard.png';
import img2 from '@/assets/Lanyard2.jpg';
import img3 from '@/assets/Lanyard3.jpeg';
import img4 from '@/assets/Lanyard4.jpeg';
import img5 from '@/assets/Profile.png'

const Project = () => {
    const items = [
        {
            image: img1,
            title: 'Wira POS',
            description:
                'Website ini dibuat untuk memudahkan Pendataan pada sebuah usaha parfum. dan dirancang sedemikian rupa agar user friendly dan mudah digunakan oleh siapa saja. Website ini dibangun menggunakan React untuk frontend, Laravel untuk backend, dan MySQL sebagai database. Selain itu, Tailwind CSS digunakan untuk styling agar tampilan lebih menarik dan responsif. Figma digunakan dalam proses desain UI/UX, sedangkan Visual Studio Code adalah IDE yang digunakan selama pengembangan. XAMPP digunakan sebagai server lokal untuk pengujian sebelum deployment.',
            tech: [
                "React", "Typescript", "Laravel", "MySQL", "Tailwind",
                "Figma", "Visual Studio Code", "Xampp"
            ]
        },
        {
            image: img2,
            title: 'Learning Management System',
            description: 'Sistem manajemen pembelajaran online untuk institusi pendidikan. Memfasilitasi pengelolaan kursus, materi, dan interaksi siswa-guru. ',
            tech: [
                "React", "Typescript", "Laravel", "MySQL", "Tailwind",
                "Figma", "Visual Studio Code", "Xampp"
            ]
        },
        {
            image: img3,
            title: 'POS Cafe',
            description: 'Aplikasi kasir modern dengan fitur laporan penjualan real-time dan manajemen produk. Membantu pemilik usaha cafe dalam mengelola transaksi dan inventaris secara efisien. ',
            tech: [
                "React", "Typescript", "Laravel", "MySQL", "Tailwind",
                "Figma", "Visual Studio Code", "Xampp"
            ]
        },
        {
            image: img4,
            title: 'POS Apparels',
            description: 'Aplikasi kasir khusus untuk toko pakaian dengan fitur manajemen stok, laporan penjualan, dan integrasi pembayaran. Memudahkan pemilik toko dalam mengelola transaksi harian dan inventaris produk. ',
            tech: [
                "React", "Typescript", "Laravel", "MySQL", "Tailwind",
                "Figma", "Visual Studio Code", "Xampp"
            ]
        },
        {
            image: img5,
            title: 'E-Commerce Platform',
            description: 'Platform e-commerce lengkap dengan fitur katalog produk, keranjang belanja, dan sistem pembayaran online. Memungkinkan bisnis untuk menjual produk mereka secara digital dengan mudah. ',
            tech: [
                "React", "Typescript", "Laravel", "MySQL", "Tailwind",
                "Figma", "Visual Studio Code", "Xampp"
            ]
        },
        {
            image: img1,
            title: 'Inventory Management System',
            description: 'Sistem manajemen inventaris yang membantu bisnis dalam melacak stok produk, mengelola pesanan, dan menghasilkan laporan inventaris secara otomatis. ',
            tech: [
                "React", "Typescript", "Laravel", "MySQL", "Tailwind",
                "Figma", "Visual Studio Code", "Xampp"
            ]
        }
    ];

    const [selected, setSelected] = useState(items[0]);

    const handleSelectItem = useCallback((item) => {
        setSelected(item);
    }, []);

    const memoizedItems = useMemo(() => items, []);

    return (
        <div className="w-full bg-black flex flex-col justify-center px-4 py-16 text-white">
            <div className="mb-12 flex flex-col justify-between gap-4">
                <div className="relative mb-12">
                    <h1 className="text-5xl font-bold">Projects</h1>
                    <div className="absolute -bottom-2 left-0 w-20 h-1 bg-white"></div>
                    <div className="absolute -bottom-4 left-0 w-14 h-[2px] bg-white"></div>
                </div>

                <div className="flex gap-10">
                    <div style={{ height: "450px", position: "relative", width: "450px" }}>
                        <InfiniteMenu
                            items={memoizedItems}
                            onSelectItem={handleSelectItem}
                        />
                    </div>

                    <div className="flex flex-col max-w-xl">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selected.title}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.35 }}
                                className="flex flex-col"
                            >
                                <h1 className="text-3xl font-bold leading-snug">
                                    {selected.title}
                                </h1>

                                <p className="text-gray-300 mt-4 leading-relaxed">
                                    {selected.description}
                                </p>

                                <h2 className="mt-6 mb-2 text-xl font-semibold">Tech Stack:</h2>

                                <div className="flex flex-wrap gap-2">
                                    {selected.tech.map((t, i) => (
                                        <span
                                            key={i}
                                            className="px-4 py-1 rounded-full bg-[#1c1f26] text-sm border border-[#2b2f36]"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;