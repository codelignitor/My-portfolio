'use client';

import React, { useState, useRef } from 'react';
import { Mail, User, MessageSquare, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('Sending...');
    
    emailjs
      .sendForm(
        'service_mq8ek9j',     // your service ID
        'template_f0wovsq',    // your template ID
        form.current,
        'lsMYi7Fl4KiDH83m1'    // your public key
      )
      .then(
        () => {
          setStatus('Message sent successfully!');
          setIsLoading(false);
          form.current.reset();
          setStatus.reset();
        },
        (error) => {
          console.error(error);
          setStatus('Something went wrong. Please try again.');
          setIsLoading(false);
        }
      );
  };

  const getStatusColor = () => {
    if (status.includes('successfully')) return 'text-green-400 bg-green-400/10 border-green-400/30';
    if (status.includes('wrong')) return 'text-red-400 bg-red-400/10 border-red-400/30';
    return 'text-cyan-400 bg-cyan-400/10 border-cyan-400/30';
  };

  const getStatusIcon = () => {
    if (isLoading) return <Loader2 className="w-4 h-4 animate-spin" />;
    if (status.includes('successfully')) return <CheckCircle className="w-4 h-4" />;
    if (status.includes('wrong')) return <AlertCircle className="w-4 h-4" />;
    return null;
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white relative">
      {/* Background Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">
              Get In <span className="text-cyan-400 underline">Touch</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Have a project in mind? Drop me a message and let's make things happen!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">
                Let's Build Something <span className="text-cyan-400 underline">Amazing</span>
              </h3>
              <p className="text-gray-400 mb-8">
                Whether building new applications or discussing web development, I'm here to help bring your ideas to life.
              </p>

              <div className="space-y-8 mt-20">
                <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-cyan-400/30 transition-colors">
                  <div className="w-10 h-10 bg-cyan-400/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-gray-400 text-sm">hello@devpro.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-cyan-400/30 transition-colors">
                  <div className="w-10 h-10 bg-cyan-400/10 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Response Time</h4>
                    <p className="text-gray-400 text-sm">Usually within 24 hours</p>
                  </div>
                </div>

                {/* Fun Fact
              <div className="p-6 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-xl border border-cyan-400/20">
                <h4 className="font-semibold text-cyan-400 mb-2">💡 Fun Fact</h4>
                <p className="text-gray-300 text-sm">
                  I reply to emails while enjoying my morning coffee ☕ - so your message might just be the perfect start to my day!
                </p>
              </div> */}
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative">
              <form 
                ref={form}
                onSubmit={sendEmail}
                className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">Send Message</h3>
                  <div className="w-12 h-1 bg-cyan-400 rounded-full mx-auto"></div>
                </div>

                <div className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <label className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                      <User className="w-4 h-4 text-cyan-400" />
                      Name
                    </label>
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="Your Name" 
                      required 
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                      <Mail className="w-4 h-4 text-cyan-400" />
                      Email
                    </label>
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="your@email.com" 
                      required 
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                      <MessageSquare className="w-4 h-4 text-cyan-400" />
                      Message
                    </label>
                    <textarea 
                      name="message" 
                      rows="4" 
                      placeholder="Tell me about your project..." 
                      required 
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 group"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </button>

                  {/* Status Message */}
                  {status && (
                    <div className={`flex items-center gap-2 justify-center p-3 rounded-lg border ${getStatusColor()}`}>
                      {getStatusIcon()}
                      <span className="text-sm font-medium">{status}</span>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;