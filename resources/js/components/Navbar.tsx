import { Phone, MessageCircle, Mail, Award, ChevronDown, User } from 'lucide-react';
import { Link, usePage } from '@inertiajs/react';

export default function Navbar() {
    const { url } = usePage();
    return (
        <>
            {/* Top Bar */}
            <div className="bg-[#002B5C] text-white py-2 px-4 md:px-8 text-[13px] flex justify-between items-center">
                <div className="flex flex-wrap gap-y-2 space-x-6">
                    <span className="flex items-center"><Phone className="w-3.5 h-3.5 mr-2 opacity-80"/> (021) 5020 2789</span>
                    <span className="flex items-center"><MessageCircle className="w-3.5 h-3.5 mr-2 opacity-80"/> 0811 1234 5678 (WhatsApp)</span>
                    <span className="flex items-center hidden sm:flex"><Mail className="w-3.5 h-3.5 mr-2 opacity-80"/> info@WebCareacademy.id</span>
                </div>
                <div className="hidden sm:block">
                    Butuh bantuan? <a href="#" className="font-bold hover:underline">Hubungi Kami</a>
                </div>
            </div>

            {/* Header Navigation */}
            <header className="bg-white px-4 md:px-8 py-4 flex items-center justify-between sticky top-0 z-50 shadow-sm border-b border-gray-100">
                <div className="flex items-center">
                    <div className="flex flex-col">
                        <div className="flex items-center text-2xl font-black text-[#002B5C] tracking-tight">
                            <div className="bg-white shadow-sm border border-gray-100 p-1.5 rounded-lg mr-2">
                                <Award className="w-6 h-6 text-[#F97316]" strokeWidth={2.5} />
                            </div>
                            WebCare
                            <span className="font-normal text-gray-500 ml-1.5 text-xl tracking-widest">ACADEMY</span>
                        </div>
                        <span className="text-[10px] text-gray-500 mt-1 uppercase tracking-wide">Profesional. Kompeten. Terpecaya.</span>
                    </div>
                </div>
                
                <nav className="hidden lg:flex items-center space-x-7 text-sm font-semibold text-gray-700">
                    <Link href="/" className={url === '/' ? "text-[#002B5C] border-b-2 border-[#002B5C] pb-1" : "hover:text-[#002B5C] transition-colors"}>Beranda</Link>
                    <Link href="/detail" className={`flex items-center ${url.startsWith('/detail') ? "text-[#002B5C] border-b-2 border-[#002B5C] pb-1" : "hover:text-[#002B5C] transition-colors"}`}>Pelatihan</Link>
                    <a href="#" className="hover:text-[#002B5C] transition-colors">Tentang Kami</a>
                    <a href="#" className="hover:text-[#002B5C] transition-colors">Jadwal</a>
                    <a href="#" className="hover:text-[#002B5C] transition-colors">SKP & Lisensi</a>
                    <a href="#" className="hover:text-[#002B5C] transition-colors">Instruktur</a>
                    <a href="#" className="hover:text-[#002B5C] transition-colors">Karir</a>
                    <a href="#" className="hover:text-[#002B5C] transition-colors">Artikel</a>
                </nav>
                
                <div className="flex items-center space-x-3">
                    <button className="hidden sm:flex items-center px-4 py-2 border border-gray-200 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors">
                        <User className="w-4 h-4 mr-2 opacity-70"/> Login
                    </button>
                    <button className="bg-[#F97316] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#EA580C] shadow-sm shadow-orange-500/20 flex items-center transition-colors">
                        <Phone className="w-4 h-4 mr-2"/> Hubungi Kami
                    </button>
                </div>
            </header>
        </>
    );
}
