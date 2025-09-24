import { useState } from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

    emailjs
      .send(
        "service_sqijj26",     // ✅ Ton Service ID (depuis EmailJS)
        "template_agsvpsn",    // ✅ Ton Template ID (depuis EmailJS)
        {
          name: form.name,       // correspond à {{name}}
          email: form.email,     // correspond à {{email}}
          message: form.message, // correspond à {{message}}
          title: "Portfolio Contact", // correspond à {{title}}
        },
        "uiG1ggSUl7_bIglcf"   // ✅ Ta Public Key (depuis EmailJS)
      )
      .then(
        () => {
          setStatus("success");
          setForm({ name: "", email: "", message: "" }); // reset formulaire
        },
        (error) => {
          console.error("EmailJS Error:", error); // debug console
          setStatus("error");
        }
      );
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-indigo-100 p-6">
      <div className="w-full max-w-3xl bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl ring-1 ring-slate-200 p-10">
        
        {/* Titre */}
        <h2 className="text-4xl font-extrabold text-center text-slate-900">
          Contact Me
        </h2>
        <p className="text-center text-slate-600 mt-2 mb-8">
          Let’s work together — drop me a message or connect on my socials!
        </p>

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-400 outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-400 outline-none"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-400 outline-none"
            required
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-transform hover:scale-[1.02]"
          >
            {status === "loading" ? "Sending..." : "Send Message ✉️"}
          </button>
        </form>

        {/* Messages de statut */}
        {status === "success" && (
          <p className="mt-4 text-green-600 text-center">
            ✅ Your message has been sent!
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-600 text-center">
            ❌ Something went wrong. Please try again later.
          </p>
        )}

        {/* Liens réseaux sociaux */}
        <div className="flex justify-center gap-6 mt-8">
          <a
            href="mailto:contact@jasonperez.fr"
            className="p-3 rounded-full bg-indigo-50 hover:bg-indigo-100 transition"
          >
            <Mail className="w-6 h-6 text-indigo-600" />
          </a>
          <a
            href="https://www.linkedin.com/in/jason-perez-68182725a/"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-indigo-50 hover:bg-indigo-100 transition"
          >
            <Linkedin className="w-6 h-6 text-indigo-600" />
          </a>
          <a
            href="https://github.com/Jason2EPITA"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-indigo-50 hover:bg-indigo-100 transition"
          >
            <Github className="w-6 h-6 text-indigo-600" />
          </a>
        </div>
      </div>
    </div>
  );
}