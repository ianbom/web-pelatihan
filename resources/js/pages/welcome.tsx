import { Head, Link } from '@inertiajs/react';
import {
    Phone, Mail, User, ChevronDown, CalendarDays, GraduationCap, Award, ClipboardCheck, BriefcaseBusiness,
    Image as ImageIcon, MonitorPlay, FileText, Headset, Star, BadgeCheck, BookOpen, ArrowRight, ChevronLeft, ChevronRight,
    Calendar, Users, Building, Laptop, MessageCircle, Clock, Bookmark, Presentation, Home, MessageSquare, 
    ShieldCheck, CheckCircle2, ClipboardList, MapPin, Activity, ThumbsUp, Shield,
    Quote, Facebook, Instagram, Youtube, Folder, HelpCircle, Video, Heart
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Welcome() {
    const menuItems = [
        { icon: CalendarDays, label: 'Schedule' },
        { icon: GraduationCap, label: 'Training' },
        { icon: Award, label: 'SKP & License' },
        { icon: ClipboardCheck, label: 'Tryout' },
        { icon: BriefcaseBusiness, label: 'Career' },
        { icon: ImageIcon, label: 'Gallery' },
        { icon: MonitorPlay, label: 'E-Course' },
        { icon: User, label: 'Instructors' },
        { icon: FileText, label: 'Articles' },
        { icon: Headset, label: 'Consultation' },
    ];

    const promos = [
        {
            badgeType: 'DISKON',
            badgeColor: 'bg-[#F97316]',
            mainText: '20%',
            subText: 'Semua Program Pelatihan Kelas Offline & Online',
            title: 'Diskon Pelatihan 20%',
            date: 'Berlaku hingga 31 Mei 2025',
            image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop',
            isSpecialBg: true,
            bgStyle: 'bg-[#002B5C]'
        },
        {
            badgeType: 'VOUCHER',
            badgeColor: 'bg-[#F97316]',
            mainText: 'Rp150',
            subText: 'Ribu',
            title: 'Voucher Sertifikasi',
            desc: 'Untuk Semua Skema BNSP',
            date: 'Berlaku hingga 30 Juni 2025',
            image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop',
            isSpecialBg: false,
            bgStyle: 'bg-white'
        },
        {
            badgeType: 'BUNDLE',
            badgeColor: 'bg-[#F97316]',
            mainText: '25%',
            preText: 'HEMAT HINGGA',
            title: 'Promo Bundle Training',
            desc: 'Gabung 2 Program Lebih Hemat',
            date: 'Berlaku hingga 30 Juni 2025',
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
            isSpecialBg: true,
            bgStyle: 'bg-[#E67E22]' // Orange-ish bg
        },
        {
            badgeType: 'EARLY BIRD',
            badgeColor: 'bg-[#F97316]',
            mainText: '15%',
            subText: 'Pendaftaran Lebih Awal Lebih Hemat',
            title: 'Early Bird Class',
            desc: 'Daftar lebih awal, dapatkan diskon',
            date: 'Berlaku hingga 15 Juni 2025',
            image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
            isSpecialBg: true,
            bgStyle: 'bg-[#002B5C]'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <Head title="WebCare Academy" />
            
            <Navbar />

            {/* Hero Section */}
            <div className="mx-4 md:mx-8 mt-6 bg-[#002B5C] rounded-[32px] overflow-hidden relative shadow-2xl min-h-[500px] lg:min-h-[600px] flex items-center">
                
                {/* Blended Background Image */}
                <div className="absolute inset-0 z-0 flex justify-end">
                    <div className="relative w-full lg:w-[65%] h-full">
                        <img 
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                            alt="Training Session" 
                            className="w-full h-full object-cover object-center lg:object-right" 
                        />
                        {/* Gradient overlay to blend image seamlessly into the left side */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#002B5C] via-[#002B5C]/90 sm:via-[#002B5C]/70 to-transparent"></div>
                        {/* Bottom gradient for mobile readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#002B5C] via-transparent to-transparent lg:hidden"></div>
                    </div>
                </div>

                <div className="relative z-10 w-full p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center">
                    {/* Left content */}
                    <div className="w-full lg:w-3/5 text-white">
                        <div className="inline-flex items-center bg-[#F97316] text-white text-[11px] tracking-wider font-bold px-3 py-1.5 rounded-full mb-6 uppercase shadow-md">
                            <Star className="w-3.5 h-3.5 mr-1.5 fill-white" /> TERPERCAYA SEJAK 2013
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
                            Pelatihan & Sertifikasi<br/>
                            Profesional untuk<br/>
                            Karier Anda
                        </h1>
                        
                        <p className="text-blue-100 text-lg mb-10 max-w-lg leading-relaxed font-light">
                            Program pelatihan berstandar kompetensi, instruktur ahli, 
                            sertifikasi resmi, dan dukungan SKP untuk pengembangan karier Anda.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-8 mb-12">
                            <div className="flex items-start">
                                <div className="bg-white/10 backdrop-blur-sm p-2.5 rounded-full mr-3 border border-white/10">
                                    <BadgeCheck className="w-5 h-5 text-blue-100" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[15px] mb-0.5">Sertifikasi Resmi</h4>
                                    <p className="text-xs text-blue-200">BNSP & Instansi Terkait</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-white/10 backdrop-blur-sm p-2.5 rounded-full mr-3 border border-white/10">
                                    <User className="w-5 h-5 text-blue-100" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[15px] mb-0.5">Instruktur Praktisi</h4>
                                    <p className="text-xs text-blue-200">Berpengalaman & Profesional</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-white/10 backdrop-blur-sm p-2.5 rounded-full mr-3 border border-white/10">
                                    <Building className="w-5 h-5 text-blue-100" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[15px] mb-0.5">Materi Terkini</h4>
                                    <p className="text-xs text-blue-200">Relevan & Aplikatif</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-4">
                            <Link href="/detail" className="bg-[#F97316] hover:bg-[#EA580C] text-white px-7 py-3.5 rounded-xl font-bold flex items-center transition-all shadow-lg shadow-orange-500/30 hover:shadow-orange-500/40 hover:-translate-y-0.5">
                                <CalendarDays className="w-5 h-5 mr-2" />
                                Lihat Jadwal
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                            <Link href="/detail" className="bg-transparent border border-white/30 hover:bg-white/10 hover:border-white text-white px-7 py-3.5 rounded-xl font-bold flex items-center transition-all">
                                Pelajari Program
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </div>
                    </div>
                    
                    {/* Right overlay card simulation */}
                    <div className="hidden lg:flex w-2/5 justify-end mt-12 lg:mt-0 relative h-[400px]">
                        <div className="absolute top-1/2 -translate-y-1/2 right-12 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl w-72 border border-white/20">
                            <h3 className="font-bold text-[#002B5C] text-xl leading-tight mb-2">Kompetensi Membangun Masa Depan</h3>
                            <p className="text-xs text-gray-500 mb-5">Tingkatkan kompetensi, perluas peluang karier.</p>
                            <div className="grid grid-cols-3 gap-3">
                                <div className="flex flex-col items-center justify-center p-3 bg-blue-50/50 rounded-xl border border-blue-100 hover:bg-blue-50 transition-colors">
                                    <BadgeCheck className="w-6 h-6 text-[#002B5C] mb-1.5" />
                                    <span className="text-[10px] font-bold text-gray-600">Kompetensi</span>
                                </div>
                                <div className="flex flex-col items-center justify-center p-3 bg-blue-50/50 rounded-xl border border-blue-100 hover:bg-blue-50 transition-colors">
                                    <Award className="w-6 h-6 text-[#002B5C] mb-1.5" />
                                    <span className="text-[10px] font-bold text-gray-600">Sertifikasi</span>
                                </div>
                                <div className="flex flex-col items-center justify-center p-3 bg-blue-50/50 rounded-xl border border-blue-100 hover:bg-blue-50 transition-colors">
                                    <BriefcaseBusiness className="w-6 h-6 text-[#002B5C] mb-1.5" />
                                    <span className="text-[10px] font-bold text-gray-600">Karier</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Carousel Nav */}
                <button className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2.5 rounded-full backdrop-blur-md transition-all z-20 hover:scale-110">
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2.5 rounded-full backdrop-blur-md transition-all z-20 hover:scale-110">
                    <ChevronRight className="w-5 h-5" />
                </button>
                
                {/* Dots */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2.5 z-20">
                    <div className="w-2 h-2 rounded-full bg-white ring-2 ring-white ring-offset-2 ring-offset-[#003875] cursor-pointer"></div>
                    <div className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/60 cursor-pointer transition-colors"></div>
                    <div className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/60 cursor-pointer transition-colors"></div>
                    <div className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/60 cursor-pointer transition-colors"></div>
                    <div className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/60 cursor-pointer transition-colors"></div>
                </div>
            </div>

            {/* Menu Grid Container */}
            <div className="max-w-6xl mx-auto mt-[-40px] relative z-20 px-4 md:px-8 mb-16">
                <div className="bg-white rounded-[24px] shadow-xl shadow-gray-200/50 p-6 md:p-10 border border-gray-100">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-10 gap-x-6">
                        {menuItems.map((item, index) => (
                            <div key={index} className="flex flex-col items-center justify-center group cursor-pointer">
                                <div className="w-[72px] h-[72px] rounded-full bg-blue-50/50 flex items-center justify-center mb-4 group-hover:bg-blue-100/50 group-hover:-translate-y-1 transition-all duration-300 border border-blue-100/50 group-hover:border-blue-200 shadow-sm">
                                    <item.icon className="w-8 h-8 text-[#003875] group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                                </div>
                                <span className="font-bold text-gray-800 text-sm tracking-tight">{item.label}</span>
                                <div className="w-6 h-1 bg-[#F97316] rounded-full mt-3 group-hover:w-8 transition-all duration-300"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Promo Section */}
            <div className="bg-[#FAFBFC] py-16 pb-24 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex justify-between items-end mb-10">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl font-black text-[#002B5C] mb-3 tracking-tight">Promo Diskon untuk Anda</h2>
                            <p className="text-gray-500 leading-relaxed font-medium">
                                Dapatkan penawaran terbaik untuk berbagai program pelatihan dan sertifikasi.<br className="hidden md:block"/>
                                Gunakan kesempatan ini untuk tingkatkan kompetensi Anda!
                            </p>
                        </div>
                        <Link href="/detail" className="hidden md:flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors group">
                            Lihat Semua Promo <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                        {promos.map((promo, idx) => (
                            <Link href="/detail" key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group cursor-pointer hover:-translate-y-1">
                                <div className="relative h-48 overflow-hidden bg-gray-100">
                                    {/* Badge */}
                                    <div className={`absolute top-4 left-4 ${promo.badgeColor} text-white text-[10px] tracking-wider font-bold px-2.5 py-1 rounded-md z-20 shadow-sm`}>
                                        {promo.badgeType}
                                    </div>
                                    
                                    {promo.isSpecialBg ? (
                                        <div className={`absolute inset-0 ${promo.bgStyle}`}>
                                            <div className="absolute inset-0 p-5 pt-14 flex flex-col z-10 text-white w-2/3">
                                                {promo.preText && <span className="text-[10px] font-bold tracking-wider opacity-90 mb-1">{promo.preText}</span>}
                                                <span className="text-5xl font-black leading-none tracking-tighter mb-2">{promo.mainText}</span>
                                                <span className="text-xs font-medium opacity-90 leading-tight">{promo.subText}</span>
                                            </div>
                                            <div className="absolute right-0 bottom-0 w-3/5 h-full">
                                                <img src={promo.image} className="w-full h-full object-cover" alt="" />
                                                <div className={`absolute inset-0 bg-gradient-to-r from-[${promo.bgStyle.replace('bg-[', '').replace(']', '')}] via-[${promo.bgStyle.replace('bg-[', '').replace(']', '')}]/80 to-transparent mix-blend-multiply`}></div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="absolute inset-0 bg-white">
                                            <div className="absolute inset-0 p-5 pt-14 flex flex-col z-10 text-[#002B5C] w-full">
                                                <div className="flex items-baseline">
                                                    <span className="text-4xl font-black tracking-tighter">{promo.mainText}</span>
                                                    <span className="text-lg font-bold ml-1">{promo.subText}</span>
                                                </div>
                                                <div className="mt-2 w-full max-w-[200px]">
                                                    <div className="border border-orange-200 rounded p-2 bg-orange-50/50">
                                                        <div className="border border-orange-200 border-dashed rounded-sm p-2 bg-white flex items-center justify-center">
                                                            <Award className="w-5 h-5 text-orange-500 opacity-20 absolute" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="absolute right-0 bottom-0 w-full h-full opacity-10 mix-blend-luminosity">
                                                <img src={promo.image} className="w-full h-full object-cover" alt="" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="p-5 flex-1 flex flex-col">
                                    <h3 className="font-bold text-[17px] mb-1 text-gray-900 group-hover:text-blue-700 transition-colors">{promo.title}</h3>
                                    {promo.desc && <p className="text-sm text-gray-500 mb-3">{promo.desc}</p>}
                                    
                                    <div className="mt-auto">
                                        <div className="flex items-center text-gray-400 text-[13px] font-medium mb-4 mt-4">
                                            <Calendar className="w-4 h-4 mr-1.5 opacity-70" /> {promo.date}
                                        </div>
                                        <div className="w-full h-[1px] bg-gray-100 mb-4"></div>
                                        <div className="text-[#F97316] font-bold text-sm flex items-center group-hover:text-[#EA580C] transition-colors w-full">
                                            Ambil Promo 
                                            <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1.5 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    
                    <Link href="/detail" className="md:hidden mt-8 flex justify-center items-center text-[#002B5C] font-bold hover:bg-gray-50 transition-colors w-full bg-white py-3.5 rounded-xl border border-gray-200 shadow-sm">
                        Lihat Semua Promo <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                </div>
            </div>

            {/* Pelatihan Unggulan Section */}
            <div className="bg-white py-16 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center text-[#F97316] text-[11px] font-bold tracking-wider mb-2 uppercase">
                                <Star className="w-4 h-4 mr-1.5" /> PROGRAM TERBAIK KAMI
                            </div>
                            <h2 className="text-3xl font-black text-[#002B5C] mb-4 tracking-tight">Pelatihan Unggulan</h2>
                            <p className="text-gray-500 font-medium leading-relaxed">
                                Program pelatihan profesional yang dirancang untuk meningkatkan kompetensi,<br className="hidden md:block" />
                                mendukung sertifikasi resmi, dan memperkuat kinerja di tempat kerja.
                            </p>
                        </div>
                        <Link href="/detail" className="mt-6 md:mt-0 px-6 py-2.5 border border-[#002B5C] text-[#002B5C] font-bold rounded-lg hover:bg-[#002B5C] hover:text-white transition-colors flex items-center shadow-sm">
                            Lihat Semua Pelatihan <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Card 1 */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 border border-gray-100 flex flex-col group">
                            <div className="relative h-48">
                                <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="Ahli K3 Umum" />
                                <div className="absolute top-4 left-4 bg-emerald-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm">POPULER</div>
                                <div className="absolute -bottom-6 left-6 w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center border-4 border-white shadow-sm z-10">
                                    <User className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <div className="p-6 pt-10 flex flex-col flex-1">
                                <h3 className="text-xl font-bold text-[#002B5C] mb-2">Ahli K3 Umum</h3>
                                <p className="text-sm text-gray-500 mb-6 leading-relaxed">Pelatihan dan sertifikasi BNSP untuk menjadi Ahli K3 Umum sesuai regulasi Kemenaker.</p>
                                
                                <div className="space-y-3 mt-auto mb-6">
                                    <div className="flex items-center text-sm">
                                        <Bookmark className="w-4 h-4 text-gray-400 mr-3" />
                                        <span className="text-gray-500 font-medium w-20">Kategori</span>
                                        <span className="text-gray-800 font-semibold">Keselamatan Kerja</span>
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <Clock className="w-4 h-4 text-gray-400 mr-3" />
                                        <span className="text-gray-500 font-medium w-20">Durasi</span>
                                        <span className="text-gray-800 font-semibold">10 Hari</span>
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <Presentation className="w-4 h-4 text-gray-400 mr-3" />
                                        <span className="text-gray-500 font-medium w-20">Metode</span>
                                        <span className="text-gray-800 font-semibold">Offline / Hybrid</span>
                                    </div>
                                </div>
                                <Link href="/detail" className="w-full bg-[#F97316] text-white py-3 rounded-xl font-bold flex justify-center items-center hover:bg-[#EA580C] transition-colors">
                                    Daftar Sekarang <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 border border-gray-100 flex flex-col group">
                            <div className="relative h-48">
                                <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="Auditor SMK3" />
                                <div className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm">BARU</div>
                                <div className="absolute -bottom-6 left-6 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center border-4 border-white shadow-sm z-10">
                                    <ClipboardList className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <div className="p-6 pt-10 flex flex-col flex-1">
                                <h3 className="text-xl font-bold text-[#002B5C] mb-2">Auditor SMK3</h3>
                                <p className="text-sm text-gray-500 mb-6 leading-relaxed">Tingkatkan kompetensi audit sistem manajemen K3 sesuai PP 50/2012.</p>
                                
                                <div className="space-y-3 mt-auto mb-6">
                                    <div className="flex items-center text-sm">
                                        <Bookmark className="w-4 h-4 text-gray-400 mr-3" />
                                        <span className="text-gray-500 font-medium w-20">Kategori</span>
                                        <span className="text-gray-800 font-semibold">Sistem Manajemen K3</span>
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <Clock className="w-4 h-4 text-gray-400 mr-3" />
                                        <span className="text-gray-500 font-medium w-20">Durasi</span>
                                        <span className="text-gray-800 font-semibold">5 Hari</span>
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <Presentation className="w-4 h-4 text-gray-400 mr-3" />
                                        <span className="text-gray-500 font-medium w-20">Metode</span>
                                        <span className="text-gray-800 font-semibold">Offline / Online</span>
                                    </div>
                                </div>
                                <Link href="/detail" className="w-full bg-[#F97316] text-white py-3 rounded-xl font-bold flex justify-center items-center hover:bg-[#EA580C] transition-colors">
                                    Daftar Sekarang <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 border border-gray-100 flex flex-col group">
                            <div className="relative h-48">
                                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="ISO 45001" />
                                <div className="absolute top-4 left-4 bg-purple-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm">REKOMENDASI</div>
                                <div className="absolute -bottom-6 left-6 w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center border-4 border-white shadow-sm z-10">
                                    <ShieldCheck className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <div className="p-6 pt-10 flex flex-col flex-1">
                                <h3 className="text-xl font-bold text-[#002B5C] mb-2">ISO 45001 Awareness</h3>
                                <p className="text-sm text-gray-500 mb-6 leading-relaxed">Pahami prinsip dan implementasi Sistem Manajemen K3 ISO 45001:2018.</p>
                                
                                <div className="space-y-3 mt-auto mb-6">
                                    <div className="flex items-center text-sm">
                                        <Bookmark className="w-4 h-4 text-gray-400 mr-3" />
                                        <span className="text-gray-500 font-medium w-20">Kategori</span>
                                        <span className="text-gray-800 font-semibold">Standar Internasional</span>
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <Clock className="w-4 h-4 text-gray-400 mr-3" />
                                        <span className="text-gray-500 font-medium w-20">Durasi</span>
                                        <span className="text-gray-800 font-semibold">2 Hari</span>
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <Presentation className="w-4 h-4 text-gray-400 mr-3" />
                                        <span className="text-gray-500 font-medium w-20">Metode</span>
                                        <span className="text-gray-800 font-semibold">Online</span>
                                    </div>
                                </div>
                                <Link href="/detail" className="w-full bg-[#F97316] text-white py-3 rounded-xl font-bold flex justify-center items-center hover:bg-[#EA580C] transition-colors">
                                    Daftar Sekarang <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 border border-gray-100 flex flex-col group">
                            <div className="relative h-48 bg-gray-100 flex items-center justify-center p-4">
                                <img src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover absolute inset-0 mix-blend-multiply opacity-40" alt="Sertifikasi BNSP" />
                                {/* BNSP Logo representation */}
                                <div className="z-10 bg-white/90 px-6 py-3 rounded-lg flex items-center shadow-md backdrop-blur-sm border border-white/50">
                                    <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center mr-2">
                                        <CheckCircle2 className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="font-black text-xl tracking-wider text-gray-800">BNSP</span>
                                </div>
                                <div className="absolute top-4 left-4 bg-orange-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm">SERTIFIKASI</div>
                                <div className="absolute -bottom-6 left-6 w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center border-4 border-white shadow-sm z-10">
                                    <Award className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <div className="p-6 pt-10 flex flex-col flex-1">
                                <h3 className="text-xl font-bold text-[#002B5C] mb-2">Sertifikasi BNSP</h3>
                                <p className="text-sm text-gray-500 mb-6 leading-relaxed">Uji kompetensi dan dapatkan sertifikasi resmi BNSP di berbagai skema profesi.</p>
                                
                                <div className="space-y-3 mt-auto mb-6">
                                    <div className="flex items-center text-sm">
                                        <Bookmark className="w-4 h-4 text-gray-400 mr-3" />
                                        <span className="text-gray-500 font-medium w-20">Kategori</span>
                                        <span className="text-gray-800 font-semibold">Sertifikasi Profesi</span>
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <Activity className="w-4 h-4 text-gray-400 mr-3" />
                                        <span className="text-gray-500 font-medium w-20">Skema</span>
                                        <span className="text-gray-800 font-semibold">80+ Skema</span>
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <Presentation className="w-4 h-4 text-gray-400 mr-3" />
                                        <span className="text-gray-500 font-medium w-20">Metode</span>
                                        <span className="text-gray-800 font-semibold">Uji Kompetensi</span>
                                    </div>
                                </div>
                                <Link href="/detail" className="w-full bg-[#F97316] text-white py-3 rounded-xl font-bold flex justify-center items-center hover:bg-[#EA580C] transition-colors">
                                    Daftar Sekarang <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Carousel Dots */}
                    <div className="flex justify-center mt-10 space-x-2.5 pb-8">
                        <div className="w-8 h-2 rounded-full bg-blue-600"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    </div>
                </div>
            </div>

            {/* SKP & Lisensi Banner */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
                <div className="bg-[#002B5C] rounded-3xl overflow-hidden relative shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#001f42] to-transparent"></div>
                    
                    <div className="flex flex-col md:flex-row relative z-10">
                        <div className="w-full md:w-[55%] p-8 md:p-12 lg:p-14">
                            <div className="inline-flex items-center text-white text-[10px] font-bold tracking-widest mb-4 uppercase opacity-80">
                                <Home className="w-3.5 h-3.5 mr-2" /> LAYANAN RESMI & TERPERCAYA
                            </div>
                            
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">SKP & Lisensi</h2>
                            
                            <p className="text-blue-100 text-base md:text-lg mb-8 max-w-lg leading-relaxed opacity-90">
                                Perpanjang SKP dan lisensi K3 Anda dengan mudah dan cepat. 
                                Kami bantu proses administrasi hingga terbit, tanpa ribet.
                            </p>
                            
                            <div className="flex flex-wrap gap-3 mb-8">
                                <div className="bg-white/10 border border-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center">
                                    <Clock className="w-3.5 h-3.5 mr-1.5" /> Proses Cepat
                                </div>
                                <div className="bg-white/10 border border-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center">
                                    <User className="w-3.5 h-3.5 mr-1.5" /> Bantuan Administrasi
                                </div>
                                <div className="bg-white/10 border border-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center">
                                    <Users className="w-3.5 h-3.5 mr-1.5" /> Pendampingan Ahli
                                </div>
                                <div className="bg-white/10 border border-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center">
                                    <FileText className="w-3.5 h-3.5 mr-1.5" /> Dokumen Resmi
                                </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-4 mb-8">
                                <Link href="/detail" className="bg-[#F97316] text-white px-6 py-3 rounded-xl font-bold flex items-center hover:bg-[#EA580C] transition-colors shadow-lg shadow-orange-500/20">
                                    Pelajari Layanan <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                                <Link href="/detail" className="bg-transparent border border-white text-white px-6 py-3 rounded-xl font-bold flex items-center hover:bg-white hover:text-[#002B5C] transition-colors">
                                    <MessageSquare className="w-4 h-4 mr-2" /> Konsultasi Gratis
                                </Link>
                            </div>
                            
                            <div className="bg-[#001B3A] rounded-xl p-4 flex flex-wrap items-center gap-x-4 gap-y-2 mt-4 text-xs font-medium text-blue-200 border border-blue-900/50">
                                <span className="text-white font-bold opacity-100">Melayani berbagai profesi</span>
                                <span className="flex items-center"><User className="w-3 h-3 mr-1 opacity-70" /> Ahli K3</span>
                                <span className="flex items-center"><ClipboardList className="w-3 h-3 mr-1 opacity-70" /> Auditor SMK3</span>
                                <span className="flex items-center"><BriefcaseBusiness className="w-3 h-3 mr-1 opacity-70" /> Teknisi K3</span>
                                <span className="flex items-center"><ShieldCheck className="w-3 h-3 mr-1 opacity-70" /> Pengawas K3</span>
                                <span className="flex items-center"><Users className="w-3 h-3 mr-1 opacity-70" /> Operator & Lainnya</span>
                            </div>
                        </div>
                        
                        <div className="w-full md:w-[45%] relative min-h-[300px]">
                            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover rounded-r-3xl md:rounded-l-none" alt="Consultant" />
                            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#002B5C] to-transparent mix-blend-multiply opacity-60"></div>
                            
                            {/* Floating Document Simulation */}
                            <div className="absolute top-1/2 left-0 -translate-x-12 -translate-y-1/2 hidden lg:flex flex-col gap-4">
                                <div className="bg-white p-4 rounded-xl shadow-2xl rotate-[-2deg] max-w-[280px] border border-gray-100 z-20">
                                    <div className="w-12 h-12 bg-yellow-100 rounded-full mx-auto mb-2 flex items-center justify-center border border-yellow-200">
                                        <Award className="w-6 h-6 text-yellow-600" />
                                    </div>
                                    <h4 className="text-[10px] text-center font-black text-gray-800 uppercase tracking-widest leading-tight">Sertifikat<br/>Kementerian Ketenagakerjaan<br/>Republik Indonesia</h4>
                                    <div className="h-[1px] bg-gray-200 my-3 w-3/4 mx-auto"></div>
                                    <div className="space-y-1.5 flex flex-col items-center">
                                        <div className="h-1 bg-gray-200 rounded w-full"></div>
                                        <div className="h-1 bg-gray-200 rounded w-5/6"></div>
                                        <div className="h-1 bg-gray-200 rounded w-4/6"></div>
                                    </div>
                                </div>
                                
                                <div className="bg-white p-4 rounded-xl shadow-2xl rotate-[3deg] ml-8 max-w-[280px] border border-gray-100 relative top-[-40px] z-10">
                                    <h4 className="text-[11px] font-black text-gray-800 uppercase tracking-wide mb-3 border-b pb-2">Kartu Tanda Kewenangan (K3)</h4>
                                    <div className="flex gap-3">
                                        <div className="w-16 h-20 bg-gray-200 rounded border border-gray-300 relative overflow-hidden">
                                            <div className="absolute bottom-0 w-full h-1/3 bg-gray-300"></div>
                                            <User className="w-8 h-8 text-gray-400 absolute top-2 left-1/2 -translate-x-1/2" />
                                        </div>
                                        <div className="flex-1 space-y-2">
                                            <div className="h-1.5 bg-gray-200 rounded w-full"></div>
                                            <div className="h-1.5 bg-gray-200 rounded w-full"></div>
                                            <div className="h-1.5 bg-gray-200 rounded w-2/3"></div>
                                            <div className="h-1.5 bg-gray-200 rounded w-1/2"></div>
                                            <div className="w-6 h-6 bg-gray-800 rounded mt-2 float-right border border-gray-400"></div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="absolute right-[-100px] bottom-[-20px] bg-white p-4 rounded-xl shadow-2xl rotate-[5deg] z-30 w-56 border border-gray-100">
                                    <div className="space-y-3">
                                        <div className="flex items-center">
                                            <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2" />
                                            <span className="text-[10px] font-bold text-gray-700">Perpanjangan SKP</span>
                                        </div>
                                        <div className="flex items-center">
                                            <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2" />
                                            <span className="text-[10px] font-bold text-gray-700">Perpanjangan Lisensi K3</span>
                                        </div>
                                        <div className="flex items-center">
                                            <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2" />
                                            <span className="text-[10px] font-bold text-gray-700">Alih Bidang / Upgrade</span>
                                        </div>
                                        <div className="flex items-center">
                                            <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2" />
                                            <span className="text-[10px] font-bold text-gray-700">Pembuatan Baru</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tentang Kami Section */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 mb-16">
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="w-full lg:w-1/2">
                        <div className="inline-flex items-center text-[#F97316] text-[11px] font-bold tracking-wider mb-2 uppercase">
                            <Star className="w-4 h-4 mr-1.5" /> TENTANG KAMI
                        </div>
                        
                        <h2 className="text-4xl font-black text-[#002B5C] mb-4 tracking-tight">Kenali Kami WebCare</h2>
                        
                        <p className="text-gray-500 mb-10 leading-relaxed font-medium">
                            WebCare adalah lembaga pelatihan, sertifikasi, dan layanan K3 terkemuka di Indonesia 
                            yang berkomitmen meningkatkan kompetensi dan keselamatan kerja secara berkelanjutan.
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                            <div className="flex items-start">
                                <div className="mt-1 bg-blue-50 p-1.5 rounded-lg">
                                    <Award className="w-5 h-5 text-[#002B5C]" />
                                </div>
                                <div className="ml-4">
                                    <h4 className="font-bold text-gray-800 mb-1 text-sm">Lembaga Resmi & Terpercaya</h4>
                                    <p className="text-xs text-gray-500 leading-relaxed">Terdaftar dan berizin resmi dari Kemenaker RI, BNSP, serta institusi terkait.</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="mt-1 bg-blue-50 p-1.5 rounded-lg">
                                    <CheckCircle2 className="w-5 h-5 text-[#002B5C]" />
                                </div>
                                <div className="ml-4">
                                    <h4 className="font-bold text-gray-800 mb-1 text-sm">Kualitas Terjamin</h4>
                                    <p className="text-xs text-gray-500 leading-relaxed">Kurikulum mutakhir, metode aplikatif, dan fasilitas pelatihan terbaik.</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="mt-1 bg-blue-50 p-1.5 rounded-lg">
                                    <User className="w-5 h-5 text-[#002B5C]" />
                                </div>
                                <div className="ml-4">
                                    <h4 className="font-bold text-gray-800 mb-1 text-sm">Instruktur Berpengalaman</h4>
                                    <p className="text-xs text-gray-500 leading-relaxed">Trainer praktisi bersertifikasi dengan pengalaman industri nyata.</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="mt-1 bg-blue-50 p-1.5 rounded-lg">
                                    <Shield className="w-5 h-5 text-[#002B5C]" />
                                </div>
                                <div className="ml-4">
                                    <h4 className="font-bold text-gray-800 mb-1 text-sm">Berorientasi Hasil</h4>
                                    <p className="text-xs text-gray-500 leading-relaxed">Kami fokus pada peningkatan kompetensi dan kinerja yang terukur.</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start sm:col-span-2">
                                <div className="mt-1 bg-blue-50 p-1.5 rounded-lg">
                                    <Headset className="w-5 h-5 text-[#002B5C]" />
                                </div>
                                <div className="ml-4">
                                    <h4 className="font-bold text-gray-800 mb-1 text-sm">Konsultasi & Solusi K3</h4>
                                    <p className="text-xs text-gray-500 leading-relaxed">Melayani kebutuhan pelatihan, audit, dan konsultasi K3 untuk berbagai sektor.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-gray-50/50 rounded-2xl p-5 border border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                            <span className="text-xs font-bold text-gray-800 mb-3 sm:mb-0">Berizin & Diakui Oleh</span>
                            <div className="flex items-center gap-5">
                                {/* Fake Logos using icons/text */}
                                <div className="flex items-center flex-col">
                                    <div className="w-7 h-7 bg-[#002B5C] rounded flex items-center justify-center mb-1">
                                        <Shield className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-[7px] font-bold text-[#002B5C] leading-none">KEMNAKER</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                                    </div>
                                    <span className="text-xs font-black text-gray-800">BNSP</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-lg font-black text-blue-600 italic tracking-tighter">KAN</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center relative">
                                        <div className="w-3 h-[2px] bg-white absolute"></div>
                                        <div className="w-[2px] h-3 bg-white absolute"></div>
                                    </div>
                                    <span className="text-[7px] font-bold text-gray-600 uppercase w-16 leading-tight">Kementerian<br/>Kesehatan<br/>Republik Indonesia</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="w-full lg:w-1/2 flex flex-col gap-4">
                        <div className="grid grid-cols-2 gap-4 flex-1">
                            <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden shadow-md group">
                                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="WebCare Academy Building" />
                            </div>
                            <div className="rounded-2xl overflow-hidden shadow-md h-40 sm:h-48 group">
                                <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Training class" />
                            </div>
                            <div className="rounded-2xl overflow-hidden shadow-md h-40 sm:h-48 group">
                                <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Group of people" />
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
                                <Users className="w-6 h-6 text-[#002B5C] mb-3 opacity-80" strokeWidth={1.5} />
                                <span className="text-xl font-black text-[#002B5C] mb-1">25.000+</span>
                                <span className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">Peserta Terlatih</span>
                            </div>
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
                                <Building className="w-6 h-6 text-[#002B5C] mb-3 opacity-80" strokeWidth={1.5} />
                                <span className="text-xl font-black text-[#002B5C] mb-1">1.200+</span>
                                <span className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">Perusahaan Mitra</span>
                            </div>
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
                                <Clock className="w-6 h-6 text-[#002B5C] mb-3 opacity-80" strokeWidth={1.5} />
                                <span className="text-xl font-black text-[#002B5C] mb-1">15+</span>
                                <span className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">Tahun Pengalaman</span>
                            </div>
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
                                <Award className="w-6 h-6 text-[#002B5C] mb-3 opacity-80" strokeWidth={1.5} />
                                <span className="text-xl font-black text-[#002B5C] mb-1">200+</span>
                                <span className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">Program<br/>Tersertifikasi</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Moment Pelatihan Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex items-center gap-2 mb-2">
                    <Star className="w-5 h-5 text-orange-500" strokeWidth={2.5} />
                    <span className="text-orange-500 font-bold uppercase tracking-wider text-sm">GALERI KEGIATAN</span>
                </div>
                <div className="flex justify-between items-end mb-8">
                    <h2 className="text-3xl sm:text-4xl font-black text-[#002B5C] tracking-tight">Moment Pelatihan</h2>
                    <a href="#" className="text-blue-600 font-bold text-sm flex items-center gap-1 hover:text-blue-700 transition-colors">
                        Lihat Semua Moment <ArrowRight className="w-4 h-4" strokeWidth={3} />
                    </a>
                </div>

                <div className="relative">
                    {/* Left Arrow */}
                    <button className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#002B5C] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-900 transition-colors z-10">
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    {/* Right Arrow */}
                    <button className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#002B5C] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-900 transition-colors z-10">
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Image Grid */}
                    <div className="flex flex-col gap-4">
                        {/* Top Row */}
                        <div className="flex gap-4 h-[250px]">
                            <div className="w-[45%] rounded-2xl overflow-hidden shadow-sm">
                                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Galeri 1" />
                            </div>
                            <div className="w-[25%] rounded-2xl overflow-hidden shadow-sm">
                                <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Galeri 2" />
                            </div>
                            <div className="w-[30%] rounded-2xl overflow-hidden shadow-sm">
                                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Galeri 3" />
                            </div>
                        </div>
                        {/* Bottom Row */}
                        <div className="flex gap-4 h-[200px]">
                            <div className="w-1/4 rounded-2xl overflow-hidden shadow-sm">
                                <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Galeri 4" />
                            </div>
                            <div className="w-1/4 rounded-2xl overflow-hidden shadow-sm">
                                <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Galeri 5" />
                            </div>
                            <div className="w-1/4 rounded-2xl overflow-hidden shadow-sm">
                                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Galeri 6" />
                            </div>
                            <div className="w-1/4 rounded-2xl overflow-hidden shadow-sm">
                                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Galeri 7" />
                            </div>
                        </div>
                    </div>
                    
                    {/* Carousel Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        <div className="w-8 h-2 bg-blue-600 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Artikel Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="w-5 h-5 text-orange-500" strokeWidth={2.5} />
                    <span className="text-orange-500 font-bold uppercase tracking-wider text-sm">ARTIKEL & INSIGHT</span>
                </div>
                <div className="flex justify-between items-end mb-8">
                    <h2 className="text-3xl sm:text-4xl font-black text-[#002B5C] tracking-tight">Artikel</h2>
                    <a href="#" className="text-blue-600 font-bold text-sm flex items-center gap-1 hover:text-blue-700 transition-colors">
                        Lebih Banyak Artikel <ArrowRight className="w-4 h-4" strokeWidth={3} />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            title: '5 Langkah Membangun Budaya K3 di Tempat Kerja',
                            desc: 'Budaya K3 yang kuat berawal dari komitmen pimpinan dan partisipasi seluruh pekerja. Simak langkah-langkah praktisnya.',
                            date: '20 Mei 2025',
                            category: 'K3 & Safety',
                            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop'
                        },
                        {
                            title: 'Mengenal Audit SMK3: Tujuan, Manfaat, dan Tahapannya',
                            desc: 'Audit SMK3 membantu perusahaan mengidentifikasi potensi bahaya dan memastikan kepatuhan terhadap regulasi.',
                            date: '15 Mei 2025',
                            category: 'SMK3',
                            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop'
                        },
                        {
                            title: 'Sertifikasi BNSP: Pengakuan Kompetensi yang Diakui Nasional',
                            desc: 'Sertifikasi BNSP membuktikan kompetensi Anda. Tingkatkan kredibilitas dan peluang karier bersama sertifikasi resmi.',
                            date: '10 Mei 2025',
                            category: 'Sertifikasi',
                            image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop'
                        },
                        {
                            title: 'Tips Mengurangi Risiko Kecelakaan di Lingkungan Industri',
                            desc: 'Kenali potensi bahaya dan terapkan pengendalian risiko untuk menciptakan lingkungan kerja yang lebih aman.',
                            date: '5 Mei 2025',
                            category: 'Industri',
                            image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop'
                        }
                    ].map((item, i) => (
                        <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow flex flex-col">
                            <div className="h-48 overflow-hidden">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-[#002B5C] font-bold text-lg mb-3 leading-snug">{item.title}</h3>
                                <p className="text-gray-500 text-sm mb-6 flex-1">{item.desc}</p>
                                <div className="flex items-center gap-4 text-xs font-semibold text-gray-400 mb-6 border-b border-gray-100 pb-4">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="w-3.5 h-3.5" /> {item.date}
                                    </div>
                                    <div className="w-px h-3 bg-gray-200"></div>
                                    <div className="flex items-center gap-1.5">
                                        <Folder className="w-3.5 h-3.5" /> {item.category}
                                    </div>
                                </div>
                                <a href="#" className="text-orange-500 font-bold text-sm flex items-center gap-1 hover:text-orange-600 transition-colors mt-auto">
                                    Baca Selengkapnya <ArrowRight className="w-4 h-4" strokeWidth={3} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Testimoni Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-24">
                <div className="flex items-center gap-2 mb-2">
                    <BadgeCheck className="w-5 h-5 text-orange-500" strokeWidth={2.5} />
                    <span className="text-orange-500 font-bold uppercase tracking-wider text-sm">TESTIMONI</span>
                </div>
                <div className="flex justify-between items-end mb-8">
                    <h2 className="text-3xl sm:text-4xl font-black text-[#002B5C] tracking-tight">Testimoni Peserta Pelatihan</h2>
                    <a href="#" className="text-blue-600 font-bold text-sm flex items-center gap-1 hover:text-blue-700 transition-colors">
                        Lihat Semua Testimoni <ArrowRight className="w-4 h-4" strokeWidth={3} />
                    </a>
                </div>

                <div className="relative">
                    {/* Left Arrow */}
                    <button className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 shadow-sm hover:bg-gray-100 transition-colors z-10 border border-gray-200">
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    {/* Right Arrow */}
                    <button className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 shadow-sm hover:bg-gray-100 transition-colors z-10 border border-gray-200">
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                quote: "Materi pelatihan sangat aplikatif dan mudah dipahami. Instruktur berpengalaman dan kelas nyaman. Ilmu yang didapat langsung bisa kami terapkan di tempat kerja.",
                                name: "Andi Pratama",
                                role: "HSE Officer PT Adaro Indonesia",
                                avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop",
                                badge: "Pelatihan Ahli K3 Umum - Batch 127"
                            },
                            {
                                quote: "Pelatihan ISO 45001 di WebCare sangat lengkap dan sistematis. Tim support juga responsif membantu kebutuhan dokumen dan konsultasi pasca pelatihan.",
                                name: "Siti Nurhaliza",
                                role: "HSE Manager PT Wijaya Karya (Persero) Tbk.",
                                avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&auto=format&fit=crop",
                                badge: "Pelatihan ISO 45001 Awareness - Batch 89"
                            },
                            {
                                quote: "Sertifikasi BNSP dari WebCare membantu saya meningkatkan kompetensi dan kepercayaan diri saat bekerja di proyek-proyek besar.",
                                name: "Rizky Maulana",
                                role: "Safety Supervisor PT PP (Persero) Tbk.",
                                avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=256&auto=format&fit=crop",
                                badge: "Sertifikasi Ahli K3 Umum BNSP - Batch 56"
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 p-8 flex flex-col hover:shadow-lg transition-shadow relative">
                                <Quote className="w-10 h-10 text-blue-600 mb-4 opacity-100 fill-blue-600" />
                                <p className="text-gray-600 font-medium mb-8 leading-relaxed flex-1">"{item.quote}"</p>
                                <div className="flex flex-col gap-4">
                                    <div className="flex gap-4 items-center">
                                        <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full object-cover shadow-sm" />
                                        <div>
                                            <h4 className="font-bold text-[#002B5C] text-base leading-tight">{item.name}</h4>
                                            <p className="text-[11px] text-gray-500 font-medium">{item.role}</p>
                                        </div>
                                    </div>
                                    <div className="bg-blue-50/80 text-blue-600 text-[11px] font-bold px-3 py-2 rounded-lg border border-blue-100/50 self-start">
                                        {item.badge}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Carousel Dots */}
                    <div className="flex justify-center gap-2 mt-10">
                        <div className="w-8 h-2 bg-blue-600 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    );
}
