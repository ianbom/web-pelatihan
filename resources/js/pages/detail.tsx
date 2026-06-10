import { Head } from '@inertiajs/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
    ChevronRight, Star, Users, Clock, MapPin, Calendar, Award, User, 
    MonitorPlay, FileText, Target, CheckCircle2, Check, ShieldCheck, Briefcase
} from 'lucide-react';

export default function Detail() {
    return (
        <div className="min-h-screen bg-gray-50/50 font-sans">
            <Head title="Pelatihan Ahli K3 Umum BNSP - WebCare Academy" />
            
            <Navbar />

            {/* Main Content Area */}
            <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
                
                {/* Breadcrumbs */}
                <nav className="flex items-center text-sm font-medium text-gray-500 mb-8">
                    <a href="#" className="text-[#002B5C] hover:underline">Home</a>
                    <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                    <a href="#" className="text-[#002B5C] hover:underline">Training</a>
                    <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                    <a href="#" className="text-[#002B5C] hover:underline">Sertifikasi K3</a>
                    <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                    <span className="text-gray-500">Ahli K3 Umum BNSP</span>
                </nav>

                {/* Hero Section */}
                <div className="flex flex-col lg:flex-row gap-8 relative items-start">
                    
                    {/* Left Content (Title & Image) */}
                    <div className="flex-1 flex flex-col md:flex-row gap-8 w-full">
                        
                        {/* Text Info */}
                        <div className="flex-1 flex flex-col justify-center">
                            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-black leading-[1.1] text-[#002B5C] mb-6 tracking-tight">
                                Pelatihan Ahli K3 Umum BNSP
                            </h1>
                            
                            <p className="text-gray-600 text-lg leading-relaxed mb-8 pr-4">
                                Program pelatihan dan sertifikasi untuk meningkatkan kompetensi profesional di bidang K3, memastikan kepatuhan regulasi, dan mempersiapkan Anda menjadi Ahli K3 Umum bersertifikat BNSP.
                            </p>
                            
                            {/* Tags */}
                            <div className="flex flex-wrap items-center gap-3 mb-10">
                                <span className="bg-[#002B5C] text-white text-xs font-bold px-4 py-1.5 rounded-full">K3</span>
                                <span className="bg-[#002B5C] text-white text-xs font-bold px-4 py-1.5 rounded-full">BNSP</span>
                                <span className="bg-[#059669] text-white text-xs font-bold px-4 py-1.5 rounded-full">Sertifikasi</span>
                                <span className="bg-transparent border border-[#F97316] text-[#F97316] text-xs font-bold px-4 py-1.5 rounded-full">Pelatihan Profesional</span>
                            </div>
                            
                            {/* Stats Row */}
                            <div className="flex flex-wrap items-center gap-6 md:gap-10 mt-auto">
                                {/* BNSP Fake Logo as requested by prior context to avoid broken links, but shaped like original */}
                                <div className="flex items-center gap-2">
                                    <img 
                                        src="https://upload.wikimedia.org/wikipedia/id/thumb/e/ef/Logo_BNSP.png/1200px-Logo_BNSP.png" 
                                        alt="BNSP Logo" 
                                        className="h-10 object-contain"
                                        onError={(e) => {
                                            // Fallback if Wikimedia block happens
                                            e.currentTarget.style.display = 'none';
                                            e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                        }}
                                    />
                                    <div className="hidden flex items-center gap-1.5">
                                        <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                                            <CheckCircle2 className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-base font-black text-gray-800 leading-none">BNSP</span>
                                            <span className="text-[6px] text-gray-500 uppercase tracking-widest">Badan Nasional Sertifikasi Profesi</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="w-px h-10 bg-gray-200 hidden md:block"></div>
                                
                                <div className="flex items-center gap-3">
                                    <Star className="w-8 h-8 text-[#FBBF24] fill-[#FBBF24]" />
                                    <div className="flex flex-col">
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-gray-500 text-sm font-semibold">Rating</span>
                                        </div>
                                        <div className="flex items-baseline gap-1.5">
                                            <span className="text-lg font-black text-gray-800 leading-none">4.9/5</span>
                                            <span className="text-xs text-gray-500">(1.250+ ulasan)</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-px h-10 bg-gray-200 hidden md:block"></div>
                                
                                <div className="flex items-center gap-3">
                                    <Users className="w-8 h-8 text-[#002B5C] fill-[#002B5C]" />
                                    <div className="flex flex-col">
                                        <span className="text-lg font-black text-gray-800 leading-none">25.000+</span>
                                        <span className="text-xs text-gray-500 font-medium">Peserta Terlatih</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="w-full md:w-[45%] lg:w-[40%] xl:w-[45%] shrink-0">
                            <div className="rounded-3xl overflow-hidden shadow-2xl h-full aspect-[4/5] md:aspect-auto relative">
                                <img 
                                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop" 
                                    alt="Training Session" 
                                    className="w-full h-full object-cover"
                                />
                                {/* Optional overlay/badges inside image if needed */}
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar Card (Sticky) */}
                    <div className="w-full lg:w-[380px] shrink-0">
                        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-8 border border-gray-100 lg:sticky lg:top-24">
                            
                            <div className="flex justify-center mb-6">
                                <span className="bg-[#EA580C] text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-sm">
                                    Diskon Early Bird 20%
                                </span>
                            </div>

                            <div className="text-center mb-6">
                                <div className="text-[40px] font-black text-[#EA580C] leading-none mb-2">Rp4.950.000</div>
                                <div className="text-gray-400 text-lg font-semibold line-through decoration-2">Rp6.250.000</div>
                            </div>

                            <div className="space-y-3 mb-8">
                                <button className="w-full bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold py-3.5 rounded-xl transition-colors shadow-lg shadow-orange-500/30 text-lg">
                                    Daftar Sekarang
                                </button>
                                <button className="w-full bg-white border-2 border-[#002B5C] text-[#002B5C] hover:bg-blue-50 font-bold py-3.5 rounded-xl transition-colors text-lg">
                                    Konsultasi
                                </button>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-3">
                                    <Clock className="w-5 h-5 text-[#002B5C] shrink-0 mt-0.5" />
                                    <div className="flex w-full">
                                        <span className="w-28 text-gray-500 text-sm font-medium">Durasi</span>
                                        <span className="text-gray-800 text-sm font-semibold">12 Hari (10 Sesi)</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <MonitorPlay className="w-5 h-5 text-[#002B5C] shrink-0 mt-0.5" />
                                    <div className="flex w-full">
                                        <span className="w-28 text-gray-500 text-sm font-medium">Metode</span>
                                        <span className="text-gray-800 text-sm font-semibold">Hybrid (Offline & Online)</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Award className="w-5 h-5 text-[#002B5C] shrink-0 mt-0.5" />
                                    <div className="flex w-full">
                                        <span className="w-28 text-gray-500 text-sm font-medium">Sertifikasi</span>
                                        <span className="text-gray-800 text-sm font-semibold">Sertifikat BNSP</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Calendar className="w-5 h-5 text-[#002B5C] shrink-0 mt-0.5" />
                                    <div className="flex w-full">
                                        <span className="w-28 text-gray-500 text-sm font-medium">Jadwal</span>
                                        <span className="text-gray-800 text-sm font-semibold">24 Juni - 5 Juli 2026</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-[#002B5C] shrink-0 mt-0.5" />
                                    <div className="flex w-full">
                                        <span className="w-28 text-gray-500 text-sm font-medium">Penyelenggara</span>
                                        <span className="text-gray-800 text-sm font-semibold">ProCert Academy</span>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-gray-100 space-y-3">
                                <div className="flex items-center gap-2.5 text-sm text-gray-600 font-medium">
                                    <Check className="w-5 h-5 text-green-600 shrink-0" strokeWidth={3} />
                                    Tersedia invoice perusahaan
                                </div>
                                <div className="flex items-center gap-2.5 text-sm text-gray-600 font-medium">
                                    <Check className="w-5 h-5 text-green-600 shrink-0" strokeWidth={3} />
                                    Bisa daftar individu / corporate
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Horizontal Info Bar */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 py-6 px-4 sm:px-8 mt-12 mb-8">
                    <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                        
                        <div className="flex items-center gap-3 w-full md:w-auto pt-4 md:pt-0">
                            <MonitorPlay className="w-7 h-7 text-[#002B5C]" strokeWidth={1.5} />
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-500">Mode:</span>
                                <span className="font-bold text-gray-900">Hybrid</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 w-full md:w-auto pt-4 md:pt-0 md:pl-6 lg:pl-8">
                            <Clock className="w-7 h-7 text-[#002B5C]" strokeWidth={1.5} />
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-500">Durasi:</span>
                                <span className="font-bold text-gray-900">12 Hari</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 w-full md:w-auto pt-4 md:pt-0 md:pl-6 lg:pl-8">
                            <MapPin className="w-7 h-7 text-[#002B5C]" strokeWidth={1.5} />
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-500">Lokasi:</span>
                                <span className="font-bold text-gray-900">Jakarta & Online</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 w-full md:w-auto pt-4 md:pt-0 md:pl-6 lg:pl-8">
                            <Calendar className="w-7 h-7 text-[#002B5C]" strokeWidth={1.5} />
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-500">Next Batch:</span>
                                <span className="font-bold text-gray-900">24 Juni 2026</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 w-full md:w-auto pt-4 md:pt-0 md:pl-6 lg:pl-8">
                            <Award className="w-7 h-7 text-[#002B5C]" strokeWidth={1.5} />
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-500">Sertifikat:</span>
                                <span className="font-bold text-gray-900">BNSP</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 w-full md:w-auto pt-4 md:pt-0 md:pl-6 lg:pl-8">
                            <User className="w-7 h-7 text-[#002B5C]" strokeWidth={1.5} />
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-500">Instruktur:</span>
                                <span className="font-bold text-gray-900">HSE Expert Team</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 w-full md:w-auto pt-4 md:pt-0 md:pl-6 lg:pl-8">
                            <Users className="w-7 h-7 text-[#002B5C]" strokeWidth={1.5} />
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-500">Kuota:</span>
                                <span className="font-bold text-gray-900">25 Peserta</span>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Grid Content Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    
                    {/* Card 1: Deskripsi */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 col-span-1 h-full">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                                <FileText className="w-6 h-6 text-[#002B5C]" />
                            </div>
                            <h2 className="text-xl font-bold text-[#002B5C]">Deskripsi Pelatihan</h2>
                        </div>
                        <div className="text-gray-600 text-sm leading-relaxed space-y-4">
                            <p>
                                Pelatihan Ahli K3 Umum BNSP dirancang untuk membekali peserta dengan kompetensi menyeluruh dalam bidang Keselamatan dan Kesehatan Kerja (K3) sesuai standar BNSP. Anda akan mempelajari peran Ahli K3 dalam menerapkan sistem K3 yang efektif di berbagai jenis industri.
                            </p>
                            <p>
                                Pelatihan ini penting untuk memastikan implementasi K3 berjalan sesuai regulasi, mendukung kesiagaan saat keadaan darurat, mengurangi risiko kecelakaan kerja, dan meningkatkan produktivitas perusahaan melalui budaya keselamatan yang berkelanjutan.
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Tujuan */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 col-span-1 h-full">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                                <Target className="w-6 h-6 text-[#002B5C]" />
                            </div>
                            <h2 className="text-xl font-bold text-[#002B5C]">Tujuan Pelatihan & Manfaat</h2>
                        </div>
                        <ul className="space-y-4">
                            {[
                                "Meningkatkan kompetensi peserta",
                                "Memahami regulasi K3 terbaru",
                                "Memahami identifikasi bahaya dan penilaian risiko",
                                "Mempersiapkan peserta untuk sertifikasi",
                                "Meningkatkan budaya keselamatan kerja",
                                "Memperkuat kepatuhan operasional perusahaan"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                                    <span className="text-sm text-gray-700 leading-relaxed font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Card 3: Peserta yang Direkomendasikan */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 col-span-1 h-full">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                                <Users className="w-6 h-6 text-[#002B5C]" />
                            </div>
                            <h2 className="text-xl font-bold text-[#002B5C] leading-tight">Peserta yang Direkomendasikan</h2>
                        </div>
                        <ul className="space-y-4">
                            {[
                                { name: "HSE Staff", icon: User },
                                { name: "Safety Officer", icon: ShieldCheck },
                                { name: "Supervisors & Manager", icon: User },
                                { name: "Operational Staff", icon: Briefcase },
                                { name: "Company Representative", icon: User },
                                { name: "Fresh Graduate yang ingin berkarier di bidang K3", icon: User }
                            ].map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                            <Icon className="w-4 h-4 text-[#002B5C]" />
                                        </div>
                                        <span className="text-sm text-gray-700 font-medium">{item.name}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Card 4: Instruktur */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 col-span-1 h-full">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                                <User className="w-6 h-6 text-[#002B5C]" />
                            </div>
                            <h2 className="text-xl font-bold text-[#002B5C]">Instruktur</h2>
                        </div>
                        <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-5">
                            <div className="shrink-0">
                                <img 
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop" 
                                    alt="Instructor" 
                                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover object-top border border-gray-100 shadow-sm"
                                />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-lg font-bold text-[#002B5C]">Ir. Denny Pratama, M.K3</h3>
                                <p className="text-xs text-gray-500 font-medium mb-3">Senior HSE Consultant & Lead Trainer</p>
                                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                                    Berpengalaman lebih dari 15 tahun di bidang K3, SMK3, ISO 45001, audit, dan pengembangan budaya keselamatan di berbagai industri manufaktur, migas, konstruksi, dan pertambangan.
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    <span className="bg-[#002B5C] text-white text-[10px] font-bold px-3 py-1 rounded-full">K3</span>
                                    <span className="bg-[#002B5C] text-white text-[10px] font-bold px-3 py-1 rounded-full">SMK3</span>
                                    <span className="bg-[#002B5C] text-white text-[10px] font-bold px-3 py-1 rounded-full">ISO 45001</span>
                                    <span className="bg-[#002B5C] text-white text-[10px] font-bold px-3 py-1 rounded-full mt-1">Incident Investigation</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 5: Jadwal Pelatihan */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:col-span-1 lg:col-span-2 h-full">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                                <Calendar className="w-6 h-6 text-[#002B5C]" />
                            </div>
                            <h2 className="text-xl font-bold text-[#002B5C]">Jadwal Pelatihan</h2>
                        </div>
                        
                        <div className="overflow-x-auto rounded-xl border border-gray-100">
                            <table className="w-full text-left text-sm whitespace-nowrap">
                                <thead className="bg-gray-50 text-gray-600 font-bold border-b border-gray-100">
                                    <tr>
                                        <th className="py-4 px-5">Batch</th>
                                        <th className="py-4 px-5">Tanggal Mulai</th>
                                        <th className="py-4 px-5">Tanggal Selesai</th>
                                        <th className="py-4 px-5">Durasi</th>
                                        <th className="py-4 px-5">Lokasi</th>
                                        <th className="py-4 px-5">Kuota</th>
                                        <th className="py-4 px-5 text-center">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-4 px-5 font-bold text-gray-800">127</td>
                                        <td className="py-4 px-5 text-gray-600">24 Juni 2026</td>
                                        <td className="py-4 px-5 text-gray-600">5 Juli 2026</td>
                                        <td className="py-4 px-5 text-gray-600">12 Hari</td>
                                        <td className="py-4 px-5 text-gray-600">Jakarta & Online</td>
                                        <td className="py-4 px-5 text-gray-600 font-medium">25</td>
                                        <td className="py-4 px-5 text-center">
                                            <span className="inline-flex justify-center w-20 bg-green-100 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full">Available</span>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-4 px-5 font-bold text-gray-800">128</td>
                                        <td className="py-4 px-5 text-gray-600">26 Agustus 2026</td>
                                        <td className="py-4 px-5 text-gray-600">6 September 2026</td>
                                        <td className="py-4 px-5 text-gray-600">12 Hari</td>
                                        <td className="py-4 px-5 text-gray-600">Jakarta & Online</td>
                                        <td className="py-4 px-5 text-gray-600 font-medium">25</td>
                                        <td className="py-4 px-5 text-center">
                                            <span className="inline-flex justify-center w-20 bg-green-100 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full">Available</span>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-4 px-5 font-bold text-gray-800">129</td>
                                        <td className="py-4 px-5 text-gray-600">21 Oktober 2026</td>
                                        <td className="py-4 px-5 text-gray-600">1 November 2026</td>
                                        <td className="py-4 px-5 text-gray-600">12 Hari</td>
                                        <td className="py-4 px-5 text-gray-600">Jakarta & Online</td>
                                        <td className="py-4 px-5 text-gray-600 font-medium">25</td>
                                        <td className="py-4 px-5 text-center">
                                            <span className="inline-flex justify-center w-20 bg-red-100 text-red-600 text-xs font-bold px-3 py-1.5 rounded-full">Full</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                </div>
            </main>

            <Footer />
        </div>
    );
}
