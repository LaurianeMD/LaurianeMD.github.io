import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion, useInView } from 'framer-motion';
import { Mail, Linkedin, Github, Phone, ArrowUpRight } from 'lucide-react';

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: data,
    });
    if (response.ok) {
      setSucceeded(true);
    }
    setIsSubmitting(false);
  };

  const contactInfo = [
    { icon: Mail, label: 'Correspondence', value: 'dmbagdjelauriane@gmail.com', href: 'mailto:dmbagdjelauriane@gmail.com' },
    { icon: Linkedin, label: 'LinkedIn', value: '/in/lauriane-mbagdje-dorenan', href: 'https://linkedin.com/in/lauriane-mbagdje-dorenan' },
    { icon: Github, label: 'GitHub', value: '/LaurianeMD', href: 'https://github.com/LaurianeMD' },
    { icon: Phone, label: 'Telephone', value: '(+221) 77 425 19 44', href: 'tel:+221774251944' },
  ];

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid lg:grid-cols-12 gap-8 mb-20 pb-12 border-b border-foreground/15"
        >
          <div className="lg:col-span-3">
            <span className="meta-label text-foreground/60 block mb-2">§ VII</span>
            <span className="meta-label text-foreground/60 block">Correspondence</span>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium text-foreground tracking-tight leading-[0.95]">
              <span className="italic font-light">{"Let's"}</span>
              <br />
              correspond.
            </h2>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <span className="meta-label text-foreground/60 block mb-6">( Directory )</span>
            <div className="border-t border-foreground/30">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group grid grid-cols-12 gap-4 py-5 border-b border-foreground/15 hover:bg-foreground/5 transition-colors"
                  >
                    <div className="col-span-1 pt-2">
                      <Icon className="w-4 h-4 text-foreground/60" />
                    </div>
                    <div className="col-span-3 meta-label text-foreground/60 pt-2">{info.label}</div>
                    <div className="col-span-7 font-display text-lg text-foreground italic group-hover:not-italic transition-all">
                      {info.value}
                    </div>
                    <div className="col-span-1 flex justify-end pt-2">
                      <ArrowUpRight className="w-4 h-4 text-foreground/40 group-hover:text-foreground group-hover:rotate-12 transition-all" />
                    </div>
                  </a>
                );
              })}
            </div>
            <p className="mt-8 text-base text-foreground/70 leading-relaxed max-w-md">
              {"I'm always open to interesting opportunities and meaningful collaborations. Whether you have a project in mind or just want to connect — feel free to reach out."}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <span className="meta-label text-foreground/60 block mb-6">( Dispatch a message )</span>

            {succeeded ? (
              <div className="border-t border-foreground/30 pt-8">
                <p className="font-display text-2xl text-foreground italic">Message dispatched.</p>
                <p className="mt-2 text-foreground/60 text-sm">{"Thank you for reaching out. I'll respond shortly."}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 border-t border-foreground/30 pt-8">
                <input type="hidden" name="access_key" value="0b0eaed4-05d7-4db4-a75c-4f371ffd24e4" />
                <input type="hidden" name="subject" value="New message from Portfolio" />
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="meta-label text-foreground/60 block mb-2">— Full Name</label>
                    <Input id="name" name="name" type="text" required className="rounded-none border-0 border-b border-foreground/30 bg-transparent px-0 focus-visible:ring-0 focus-visible:border-foreground font-display text-lg" />
                  </div>
                  <div>
                    <label htmlFor="email" className="meta-label text-foreground/60 block mb-2">— Email Address</label>
                    <Input id="email" name="email" type="email" required className="rounded-none border-0 border-b border-foreground/30 bg-transparent px-0 focus-visible:ring-0 focus-visible:border-foreground font-display text-lg" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="meta-label text-foreground/60 block mb-2">— Subject</label>
                  <Input id="subject" name="subject" type="text" required className="rounded-none border-0 border-b border-foreground/30 bg-transparent px-0 focus-visible:ring-0 focus-visible:border-foreground font-display text-lg" />
                </div>
                <div>
                  <label htmlFor="message" className="meta-label text-foreground/60 block mb-2">— Message</label>
                  <Textarea id="message" name="message" required className="rounded-none border-0 border-b border-foreground/30 bg-transparent px-0 focus-visible:ring-0 focus-visible:border-foreground font-display text-lg min-h-[120px] resize-none" />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-none w-full bg-foreground text-background hover:bg-foreground/85 py-6 group"
                >
                  <span className="meta-label flex items-center justify-center gap-3">
                    {isSubmitting ? 'Dispatching…' : 'Send dispatch'}
                    <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                  </span>
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;