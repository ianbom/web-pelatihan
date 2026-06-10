import { 
    MessageCircle, Phone, Mail, MapPin, Clock, Headset, FileText, HelpCircle, Shield, 
    CheckCircle2, Activity, ArrowRight, Facebook, Instagram, Youtube, ShieldCheck,
    BriefcaseBusiness, Award, BadgeCheck, Heart, Anchor
} from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#002B5C] text-white pt-16 pb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 mb-16">
                    
                    {/* Hubungi Kami */}
                    <div className="lg:col-span-1">
                        <h3 className="font-bold text-sm tracking-widest uppercase mb-6 text-white">HUBUNGI KAMI</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MessageCircle className="w-5 h-5 text-blue-300 shrink-0 mt-0.5" />
                                <div className="text-sm text-gray-300 font-medium space-y-1.5">
                                    <p>0811 1234 5678</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-blue-300 shrink-0" />
                                <span className="text-sm text-gray-300 font-medium">(021) 5020 2789 (Office)</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-blue-300 shrink-0" />
                                <span className="text-sm text-gray-300 font-medium">info@WebCareacademy.id</span>
                            </li>
                            <li className="flex items-start gap-3 mt-4">
                                <MapPin className="w-5 h-5 text-blue-300 shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-300 font-medium leading-relaxed">Ruko Buaran Square No. 8<br/>Jl. Raya Tengah No.45, Kp. Tengah</span>
                            </li>
                            <li className="flex items-start gap-3 mt-4">
                                <Clock className="w-5 h-5 text-blue-300 shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-300 font-medium leading-relaxed">Senin - Jumat: 08.00 - 17.00 WIB</span>
                            </li>
                        </ul>
                    </div>

                    {/* Bantuan */}
                    <div className="lg:col-span-1">
                        <h3 className="font-bold text-sm tracking-widest uppercase mb-6 text-white">BANTUAN</h3>
                        <ul className="space-y-5">
                            <li>
                                <a href="#" className="flex items-center gap-3 text-sm text-gray-300 font-medium hover:text-white transition-colors">
                                    <Headset className="w-5 h-5 text-blue-300" /> Contact Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-3 text-sm text-gray-300 font-medium hover:text-white transition-colors">
                                    <FileText className="w-5 h-5 text-blue-300" /> Terms & Conditions
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-3 text-sm text-gray-300 font-medium hover:text-white transition-colors">
                                    <HelpCircle className="w-5 h-5 text-blue-300" /> FAQ
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Business Partner */}
                    <div className="lg:col-span-1">
                        <h3 className="font-bold text-sm tracking-widest uppercase mb-6 text-white">BUSINESS PARTNER</h3>
                        <div className="grid grid-cols-2 gap-3 mb-5">
                            <div className="bg-white rounded-lg p-2.5 flex flex-col items-center justify-center shadow-sm gap-1 hover:-translate-y-0.5 transition-transform">
                                <BriefcaseBusiness className="w-6 h-6 text-[#002B5C]" />
                                <span className="text-[8px] font-bold text-[#002B5C] text-center">KEMNAKER RI</span>
                            </div>
                            <div className="bg-white rounded-lg p-2.5 flex flex-col items-center justify-center shadow-sm gap-1 hover:-translate-y-0.5 transition-transform">
                                <Award className="w-6 h-6 text-red-600" />
                                <span className="text-[8px] font-bold text-gray-800 text-center">BNSP</span>
                            </div>
                            <div className="bg-white rounded-lg p-2.5 flex flex-col items-center justify-center shadow-sm gap-1 hover:-translate-y-0.5 transition-transform">
                                <BadgeCheck className="w-6 h-6 text-blue-800" />
                                <span className="text-[8px] font-bold text-blue-900 text-center">KAN</span>
                            </div>
                            <div className="bg-white rounded-lg p-2.5 flex flex-col items-center justify-center shadow-sm gap-1 hover:-translate-y-0.5 transition-transform">
                                <Heart className="w-6 h-6 text-green-600" />
                                <span className="text-[8px] font-bold text-gray-600 text-center uppercase">Kemenkes RI</span>
                            </div>
                            <div className="bg-white rounded-lg p-2.5 flex flex-col items-center justify-center shadow-sm gap-1 hover:-translate-y-0.5 transition-transform">
                                <ShieldCheck className="w-6 h-6 text-green-500" />
                                <span className="text-[8px] font-bold text-gray-700 text-center leading-tight">BPJS Ketenagakerjaan</span>
                            </div>
                            <div className="bg-white rounded-lg p-2.5 flex flex-col items-center justify-center shadow-sm gap-1 hover:-translate-y-0.5 transition-transform">
                                <Anchor className="w-6 h-6 text-blue-600" />
                                <span className="text-[8px] font-black text-blue-600 text-center">PELINDO</span>
                            </div>
                        </div>
                        <a href="#" className="text-white text-xs font-bold flex items-center gap-1.5 hover:text-blue-200 transition-colors">
                            Lihat partner lainnya <ArrowRight className="w-3.5 h-3.5" strokeWidth={3} />
                        </a>
                    </div>

                    {/* Social Media */}
                    <div className="lg:col-span-1">
                        <h3 className="font-bold text-sm tracking-widest uppercase mb-6 text-white">SOCIAL MEDIA</h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="#" className="flex items-center gap-3 text-sm text-gray-200 font-medium hover:text-white transition-colors group">
                                    <div className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
                                        <Facebook className="w-4 h-4 text-white fill-white" />
                                    </div>
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-3 text-sm text-gray-200 font-medium hover:text-white transition-colors group">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
                                        <Instagram className="w-4 h-4 text-white" />
                                    </div>
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-3 text-sm text-gray-200 font-medium hover:text-white transition-colors group">
                                    <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center border border-gray-800 shrink-0 transition-transform group-hover:scale-110">
                                        <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 448 512"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg>
                                    </div>
                                    TikTok
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-3 text-sm text-gray-200 font-medium hover:text-white transition-colors group">
                                    <div className="w-8 h-8 rounded-full bg-[#FF0000] flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
                                        <Youtube className="w-4 h-4 text-white fill-white" />
                                    </div>
                                    YouTube
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Aplikasi Miccapro */}
                    <div className="lg:col-span-1">
                        <h3 className="font-bold text-sm tracking-widest uppercase mb-6 text-white">APLIKASI MICCAPRO</h3>
                        <p className="text-sm text-gray-300 font-medium mb-5 leading-relaxed">
                            Kelola pelatihan, sertifikasi dan kompetensi dalam satu genggaman.
                        </p>
                        <div className="flex flex-col items-start gap-4">
                            <div className="flex flex-col gap-2.5">
                                <a href="#" className="inline-block transition-transform hover:scale-105">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" className="h-[38px] w-auto" />
                                </a>
                                <a href="#" className="inline-block transition-transform hover:scale-105">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-[38px] w-auto" />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-blue-900/60 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2.5">
                        <div className="bg-white p-1 rounded-md shadow-sm">
                            <ShieldCheck className="w-6 h-6 text-[#002B5C]" />
                        </div>
                        <div className="flex flex-col">
                            <div className="font-black text-lg leading-none tracking-tight text-white mb-0.5">WebCare</div>
                            <div className="text-[8px] tracking-[0.2em] text-blue-200 uppercase font-bold leading-none">Academy</div>
                        </div>
                    </div>
                    <div className="text-[13px] text-gray-400 font-medium">
                        © Copyright 2020 - 2026 PT Mitra Dinamis Yang Utama
                    </div>
                    <div className="text-[13px] text-gray-400 font-medium">
                        Powered By <span className="text-white font-bold tracking-wide">WebCare</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
