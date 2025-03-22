import {useRef} from "react";
import { Helmet } from "react-helmet";
import {
  Building2,
  Sparkles,
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

function openEmail(event, subjectRef, nameRef, messageRef) {
  event.preventDefault();

  const subject = subjectRef.current.value;
  const name = nameRef.current.value;
  const message = messageRef.current.value;

  globalThis.location.href = `mailto:connect@connelab.jp?subject=${encodeURIComponent(subject)}&body=名前: ${encodeURIComponent(name)}%0Aお問い合わせ内容: %0A${encodeURIComponent(message)}`;
}

function App() {
  const subjectRef = useRef(null);
  const nameRef = useRef(null);
  const messageRef = useRef(null);
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <Helmet>
        <meta property="og:title" content="ConneLab HomePage" />
        <meta
          property="og:description"
          content="「今あるものをより便利に」という理念のもと、 常に最先端の技術とトレンドを追求し、 お客様のビジネスの成長と成功をサポートしています。"
        />
        <meta property="og:url" content="https://www.connelab.jp/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ConneLab" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ConneLab HomePage" />
        <meta
          name="twitter:description"
          content="「今あるものをより便利に」という理念のもと、 常に最先端の技術とトレンドを追求し、 お客様のビジネスの成長と成功をサポートしています。"
        />
      </Helmet>
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-[#2A2522]" />
              <span className="text-2xl font-semibold text-[#2A2522]">
                ConneLab
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-[#2A2522]/80 hover:text-[#2A2522] transition-colors"
              >
                サービス
              </a>
              <a
                href="#about"
                className="text-[#2A2522]/80 hover:text-[#2A2522] transition-colors"
              >
                会社概要
              </a>
              <a
                href="#contact"
                className="text-[#2A2522]/80 hover:text-[#2A2522] transition-colors"
              >
                お問い合わせ
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-[#2A2522] mb-6">
              今あるものを
              <br />
              より便利に
            </h1>
            <p className="text-xl text-[#2A2522]/80 mb-8 max-w-2xl mx-auto">
              ConneLab は、革新的なウェブソリューションを提供し、
              お客様のビジネスの成長をサポートします。
            </p>
            <button className="bg-[#2A2522] text-white px-8 py-3 rounded-full hover:bg-[#2A2522]/90 transition-colors inline-flex items-center space-x-2">
              <a
                href="#contact"
              >
                お問い合わせ
              </a>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#2A2522] mb-12">
            サービス
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "ウェブ開発",
                description:
                  "最新技術を活用した高品質なウェブアプリケーションの開発",
              },
              {
                icon: <Building2 className="w-8 h-8" />,
                title: "システム構築",
                description:
                  "スケーラブルで安全なシステムアーキテクチャの設計と実装",
              },
            ].map((service, index) => (
              <div key={index} className="bg-[#FAF7F2] p-8 rounded-2xl">
                <div className="text-[#2A2522] mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-[#2A2522] mb-2">
                  {service.title}
                </h3>
                <p className="text-[#2A2522]/80">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {/*<img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000"
                alt="Modern office"
                className="rounded-2xl shadow-lg"
            />*/}
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#2A2522] mb-6">
                会社概要
              </h2>
              <p className="text-[#2A2522]/80 mb-4">
                ConneLab
                は、2025年に設立された新しい形のテクノロジーカンパニーです。
                私たちは、最新のテクノロジーと創造性を組み合わせ、
                クライアントのビジネスに革新的なソリューションを提供します。
              </p>
              <p className="text-[#2A2522]/80">
                「今あるものをより便利に」という理念のもと、
                常に最先端の技術とトレンドを追求し、
                お客様のビジネスの成長と成功をサポートしています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Production Section */}
      <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
            <div>
              <h2 className="text-3xl" style={{marginTop: 50, fontWeight: "bold", textAlign: "center"}}>
                制作物
              </h2>
              <iframe
              src="https://note.com/embed/notes/nf0c8a1da6437"
              style={{
                border: "0",
                display: "block",
                width: "494px",
                padding: "0px",
                margin: "25px auto",
                position: "static",
                visibility: "visible",
              }}
              height="250"
            />
          </div>
        </div>
        </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#2A2522] mb-12">
            お問い合わせ
          </h2>
          <div className="max-w-xl mx-auto">
            <form
              className="space-y-6"
              onSubmit={(e) => openEmail(e, subjectRef, nameRef, messageRef)}
            >
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-[#2A2522]"
                >
                  件名
                </label>
                <input
                  ref={subjectRef}
                  type="text"
                  id="subject"
                  style={{backgroundColor: "white"}}
                  className="mt-1 block w-full rounded-md border-[#2A2522]/20 shadow-sm focus:border-[#2A2522] focus:ring-[#2A2522] bg-[#FAF7F2]"
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#2A2522]"
                >
                  お名前
                </label>
                <input
                  ref={nameRef}
                  type="text"
                  id="name"
                  style={{backgroundColor: "white"}}
                  className="mt-1 block w-full rounded-md border-[#2A2522]/20 shadow-sm focus:border-[#2A2522] focus:ring-[#2A2522] bg-[#FAF7F2]"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#2A2522]"
                >
                  メッセージ
                </label>
                <textarea
                  ref={messageRef}
                  id="message"
                  rows={4}
                  style={{backgroundColor: "white"}}
                  className="mt-1 block w-full rounded-md border-[#2A2522]/20 shadow-sm focus:border-[#2A2522] focus:ring-[#2A2522] bg-[#FAF7F2]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#2A2522] text-white px-8 py-3 rounded-full hover:bg-[#2A2522]/90 transition-colors"
              >
                送信する
              </button>
            </form>
          </div>
        </div>
      </section>

      
      {/* Footer */}
      <footer className="bg-[#2A2522] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Building2 className="h-6 w-6" />
                <span className="text-xl font-semibold">ConneLab</span>
              </div>
            </div>
            <div className="md:text-right">
              <div className="flex space-x-4 md:justify-end mb-4">
                <a
                  href="#"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
              <p className="text-white/80">
                © 2025 ConneLab. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
