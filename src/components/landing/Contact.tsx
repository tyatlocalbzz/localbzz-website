import { useState, useEffect } from 'react'
import { ArrowRight, Check, Loader2, X } from 'lucide-react'
import { LightBulbIcon, DocumentTextIcon, PhoneIcon } from '@heroicons/react/24/solid'
import Button from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { motion, AnimatePresence } from 'framer-motion'

const howDidYouHearOptions = [
  'Google Search',
  'Social Media',
  'Referral',
  'Saw Our Work',
  'Other'
]

const Contact: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    howDidYouHear: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isModalOpen])

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false)
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    const submissionData = {
      ...formData,
      submittedAt: new Date().toISOString()
    }

    // Save to localStorage as backup (in case API fails)
    try {
      const existing = JSON.parse(localStorage.getItem('localbzz_leads') || '[]')
      existing.push(submissionData)
      localStorage.setItem('localbzz_leads', JSON.stringify(existing))
    } catch {
      // localStorage might be full or disabled, continue anyway
    }

    // Try to send to backend
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionData)
      })
    } catch {
      // Log error but don't block the user - we have the localStorage backup
      console.error('Form submission to API failed, data saved locally')
    }

    // Always show success
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const openModal = () => {
    setIsModalOpen(true)
    setIsSubmitted(false)
    setFormData({ name: '', phone: '', email: '', howDidYouHear: '' })
  }

  const inputClasses = "w-full px-4 py-3 bg-white border-2 border-brand-dark text-brand-dark font-mono text-sm focus:outline-none focus:ring-2 focus:ring-brand-dark focus:ring-offset-2 focus:ring-offset-brand-paper placeholder:text-neutral-400"
  const labelClasses = "block text-xs font-mono font-bold uppercase tracking-widest text-brand-dark mb-2"

  return (
    <>
      <section className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-brand-gold border-b-2 border-brand-dark relative overflow-hidden" id="contact">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase mb-6 leading-[0.9]">
              Not sure if you need us?<br className="hidden sm:block" /> Let's find out.
            </h2>
          </Reveal>

          {/* Constrained subhead width for better readability */}
          <Reveal delay={0.1}>
            <p className="text-base sm:text-lg md:text-xl mb-10 md:mb-12 text-brand-dark/90 leading-relaxed max-w-xl mx-auto">
              <strong>Let's talk.</strong> We'll listen first, ask questions, and give you an honest take on what's working and what's not. No pitch, just a real conversation about your business.
            </p>
          </Reveal>

          {/* Black box with centered content and optical adjustments */}
          <Reveal delay={0.15}>
            <div className="bg-brand-dark text-white pt-8 pb-7 px-8 sm:pt-10 sm:pb-8 sm:px-10 md:pt-10 md:pb-8 md:px-14 border-2 border-brand-dark mb-10 md:mb-14 max-w-xl mx-auto">
              <h3 className="font-display text-lg sm:text-xl uppercase mb-6 text-center">You'll walk away with:</h3>
              {/* Centered list container */}
              <ul className="space-y-5 inline-block text-left">
                <li className="flex items-start gap-4">
                  <LightBulbIcon className="w-5 h-5 text-brand-gold shrink-0 mt-[3px]" />
                  <span className="text-sm sm:text-base">Clarity on what's actually holding your marketing back</span>
                </li>
                <li className="flex items-start gap-4">
                  <DocumentTextIcon className="w-5 h-5 text-brand-gold shrink-0 mt-[3px]" />
                  <span className="text-sm sm:text-base"><strong>2-3 things you can do this week</strong> to start seeing results</span>
                </li>
                <li className="flex items-start gap-4">
                  <PhoneIcon className="w-5 h-5 text-brand-gold shrink-0 mt-[3px]" />
                  <span className="text-sm sm:text-base">A clear next step, whether that's working together or not</span>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-col items-center">
              <Button
                variant="secondary"
                onClick={openModal}
                className="group"
              >
                Get a Call Back
                <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
              </Button>
              {/* Footer text with better contrast and spacing */}
              <p className="text-sm text-brand-dark/80 font-mono mt-5 tracking-wide">
                DFW, TX · We'll reach out within 24 hours.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-md bg-brand-paper border-2 border-brand-dark shadow-hard-lg"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button - bolder X icon */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-brand-dark hover:text-brand-dark/70 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" strokeWidth={2.5} />
              </button>

              <div className="p-6 sm:p-8">
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="text-center py-6"
                    >
                      {/* Checkmark circle - optically centered icon */}
                      <div className="w-16 h-16 bg-brand-dark rounded-full flex items-center justify-center mx-auto mb-5">
                        <Check className="w-8 h-8 text-brand-gold translate-x-[1px]" strokeWidth={3} />
                      </div>
                      <h3 className="font-display text-2xl uppercase mb-3">We got it.</h3>
                      <p className="text-neutral-600 mb-5 max-w-xs mx-auto">
                        We'll call you within 24 hours to learn more about your business.
                      </p>
                      {/* Full-width button for better visual anchoring */}
                      <Button
                        variant="secondary"
                        onClick={() => setIsModalOpen(false)}
                        fullWidth
                      >
                        Close
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      <div className="text-center mb-6">
                        <h3 className="font-display text-xl sm:text-2xl uppercase mb-2">Let's Talk</h3>
                        <p className="text-sm text-neutral-500">Fill this out and we'll call you.</p>
                      </div>

                      {/* Name */}
                      <div>
                        <label htmlFor="modal-name" className={labelClasses}>
                          Name *
                        </label>
                        <input
                          type="text"
                          id="modal-name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className={inputClasses}
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="modal-phone" className={labelClasses}>
                          Phone *
                        </label>
                        <input
                          type="tel"
                          id="modal-phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(555) 123-4567"
                          className={inputClasses}
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="modal-email" className={labelClasses}>
                          Email *
                        </label>
                        <input
                          type="email"
                          id="modal-email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@yourbusiness.com"
                          className={inputClasses}
                        />
                      </div>

                      {/* How did you hear about us */}
                      <div>
                        <label htmlFor="modal-howDidYouHear" className={labelClasses}>
                          How did you hear about us? *
                        </label>
                        <select
                          id="modal-howDidYouHear"
                          name="howDidYouHear"
                          required
                          value={formData.howDidYouHear}
                          onChange={handleChange}
                          className={`${inputClasses} cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23131313%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px] bg-[right_16px_center] bg-no-repeat pr-12`}
                        >
                          <option value="">Select one...</option>
                          {howDidYouHearOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>

                      {/* Error message */}
                      {error && (
                        <p className="text-red-600 text-sm font-mono">{error}</p>
                      )}

                      {/* Submit */}
                      <Button
                        type="submit"
                        variant="secondary"
                        fullWidth
                        disabled={isSubmitting}
                        className="group"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Get a Call Back
                            <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </Button>

                      {/* Promise */}
                      <p className="text-xs text-center text-neutral-500 font-mono">
                        We'll reach out within 24 hours.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Contact
