/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  BookOpen, 
  GraduationCap, 
  Users, 
  Award, 
  ChevronRight, 
  Play, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin,
  Facebook,
  Youtube,
  Star
} from "lucide-react";

export default function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
              <GraduationCap size={24} />
            </div>
            <span className="text-xl font-bold font-serif text-primary tracking-tight">Thầy Lê Xuân Kỷ</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-primary transition-colors">Giới Thiệu</a>
            <a href="#courses" className="hover:text-primary transition-colors">Khóa Học</a>
            <a href="#philosophy" className="hover:text-primary transition-colors">Triết Lý</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Cảm Nhận</a>
            <button className="bg-primary text-white px-6 py-2.5 rounded-full hover:bg-primary/90 transition-all font-semibold">
              Đăng Ký Học
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 bg-[radial-gradient(circle_at_top_right,_var(--color-primary-10),_transparent_40%)]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeIn}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Chương trình đào tạo chất lượng cao
            </div>
            <h1 className="text-6xl md:text-7xl font-bold leading-[1.1] mb-6">
              Ươm mầm <span className="text-primary italic">Tri Thức</span>,<br /> 
              Xây dựng <span className="text-secondary italic">Tương Lai</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
              Chào mừng các em đến với không gian học tập của thầy Lê Xuân Kỷ. Nơi biến những kiến thức phức tạp trở nên đơn giản, nơi đam mê được khơi dậy và ước mơ được bay cao.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-white px-8 py-4 rounded-2xl hover:bg-primary/90 transition-all font-bold flex items-center gap-2 group shadow-lg shadow-primary/20">
                Bắt đầu học ngay
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl hover:bg-slate-50 transition-all font-bold flex items-center gap-2">
                <Play size={20} className="text-primary fill-primary" />
                Giới thiệu khóa học
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative z-10 bg-slate-200">
               <img 
                src="https://picsum.photos/seed/teacher/800/1000" 
                alt="Teacher Le Xuan Ky" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Cards */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -right-6 top-1/4 z-20 glass p-4 rounded-2xl shadow-xl flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                 <Users size={24} />
              </div>
              <div>
                <div className="text-xl font-bold text-slate-900">10,000+</div>
                <div className="text-xs text-slate-500 font-medium">Học sinh theo học</div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="absolute -left-6 bottom-1/4 z-20 glass p-4 rounded-2xl shadow-xl flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                 <Award size={24} />
              </div>
              <div>
                <div className="text-xl font-bold text-slate-900">20+ Năm</div>
                <div className="text-xs text-slate-500 font-medium">Kinh nghiệm giảng dạy</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
               {[
                 { label: "Tỷ lệ đỗ đại học", value: "98%", icon: <GraduationCap /> },
                 { label: "Khóa học online", value: "50+", icon: <BookOpen /> },
                 { label: "Giải thưởng GD", value: "15", icon: <Award /> },
                 { label: "Bài giảng miễn phí", value: "200+", icon: <Star /> },
               ].map((stat, i) => (
                 <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                 >
                    <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-primary mx-auto mb-4">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Featured Courses */}
      <section id="courses" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Khóa Học <span className="text-primary italic">Nổi Bật</span></h2>
              <p className="text-slate-600 max-w-lg">
                Các lộ trình học tập được thiết kế chuyên sâu, phù hợp với từng trình độ và mục tiêu của học sinh.
              </p>
            </div>
            <button className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Xem tất cả khóa học <ChevronRight size={20} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Ôn Thi Đại Học Khối A",
                level: "Nâng cao",
                students: "1,200+",
                image: "https://picsum.photos/seed/math/600/400"
              },
              {
                title: "Luyện Thi Học Sinh Giỏi",
                level: "Chuyên sâu",
                students: "500+",
                image: "https://picsum.photos/seed/physic/600/400"
              },
              {
                title: "Nền Tảng Kiến Thức Cơ Bản",
                level: "Cơ bản",
                students: "2,500+",
                image: "https://picsum.photos/seed/chem/600/400"
              }
            ].map((course, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bento-card group overflow-hidden p-0"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase rounded-md tracking-wider">
                      {course.level}
                    </span>
                    <span className="text-slate-400 text-xs flex items-center gap-1">
                      <Users size={12} /> {course.students} học viên
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{course.title}</h3>
                  <button className="w-full py-3 border border-slate-200 rounded-xl font-bold text-sm hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all">
                    Tìm hiểu chi tiết
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                 <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
                 <h2 className="text-4xl md:text-5xl font-bold mb-8 relative">
                   Tại sao nên học cùng <br />
                   <span className="text-primary italic">Thầy Lê Xuân Kỷ?</span>
                 </h2>
                 <div className="space-y-6">
                    {[
                      { title: "Phương pháp tư duy đột phá", desc: "Không học vẹt, tập trung hiểu bản chất để giải quyết mọi bài toán." },
                      { title: "Lộ trình cá nhân hóa", desc: "Mỗi học sinh có một xuất phát điểm khác nhau, lộ trình sẽ được tinh chỉnh phù hợp." },
                      { title: "Hỗ trợ 24/7", desc: "Đội ngũ trợ giảng và thầy luôn sẵn sàng giải đáp mọi thắc mắc của các em." },
                      { title: "Hệ thống tài liệu độc quyền", desc: "Bộ đề thi và tài liệu được biên soạn công phu qua nhiều năm kinh nghiệm." }
                    ].map((item, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex gap-4"
                      >
                         <div className="mt-1 w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                            <CheckCircle2 size={16} />
                         </div>
                         <div>
                            <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                            <p className="text-slate-600 text-sm">{item.desc}</p>
                         </div>
                      </motion.div>
                    ))}
                 </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-4 pt-12">
                   <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-slate-200">
                      <img src="https://picsum.photos/seed/stud1/400/600" alt="Students" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                   </div>
                   <div className="aspect-square rounded-2xl overflow-hidden bg-slate-200">
                      <img src="https://picsum.photos/seed/stud2/400/400" alt="Students" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                   </div>
                 </div>
                 <div className="space-y-4">
                   <div className="aspect-square rounded-2xl overflow-hidden bg-slate-200">
                      <img src="https://picsum.photos/seed/stud3/400/400" alt="Students" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                   </div>
                   <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-slate-200">
                      <img src="https://picsum.photos/seed/stud4/400/600" alt="Students" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                   </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto rounded-[3rem] bg-slate-900 py-16 px-8 md:px-16 relative overflow-hidden text-center text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-[100px] -ml-32 -mb-32" />
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative">Sẵn sàng chinh phục đỉnh cao tri thức?</h2>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto relative">
            Để lại email để nhận được bộ tài liệu ôn thi miễn phí và thông báo về các khóa học mới nhất từ thầy.
          </p>
          <div className="max-w-md mx-auto flex flex-col md:flex-row gap-4 relative">
            <input 
              type="email" 
              placeholder="Địa chỉ email của bạn..." 
              className="flex-1 bg-white/10 border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-colors"
            />
            <button className="bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary/90 transition-all">
              Đăng Ký Ngay
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-warm-bg border-t border-slate-100 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                  <GraduationCap size={20} />
                </div>
                <span className="text-lg font-bold font-serif text-primary">Thầy Lê Xuân Kỷ</span>
              </div>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                Tận tâm - Chuyên nghiệp - Hiệu quả. Đồng hành cùng học sinh trên con đường chinh phục ước mơ.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white hover:border-primary transition-all">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white hover:border-primary transition-all">
                  <Youtube size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6">Liên Kết</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#" className="hover:text-primary transition-colors">Về thầy Kỷ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Các khóa học</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Tài liệu miễn phí</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Lịch khai giảng</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Thành Tích</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#" className="hover:text-primary transition-colors">Học sinh tiêu biểu</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Giải thưởng thủ khoa</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Vinh danh quốc tế</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Thông Tin Liên Hệ</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-primary shrink-0" />
                  <span>123 Đường Giáo Dục, Quận 1, TP. Hồ Chí Minh</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-primary shrink-0" />
                  <span>+84 (0) 90 123 4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-primary shrink-0" />
                  <span>ky.lexuan@email.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-medium uppercase tracking-widest">
            <p>© 2026 THẦY LÊ XUÂN KỶ. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-primary transition-colors">Quy định sử dụng</a>
              <a href="#" className="hover:text-primary transition-colors">Chính sách bảo mật</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
