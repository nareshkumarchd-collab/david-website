export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-[#0b1012]" style={{ borderTop: '1px solid rgba(243,240,236,0.08)' }}>
      <div className="max-w-[1440px] mx-auto px-[4rem] py-[2rem] flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-[12px] font-medium tracking-[0.08em] text-[#f3f0ec]/20">
          &copy; {year} David Robinson
        </span>
        <div className="flex items-center gap-8">
          <a
            href="https://linkedin.com/in/davidrobinson"
            target="_blank" rel="noopener noreferrer"
            className="link-line text-[12px] font-medium tracking-[0.08em] uppercase text-[#f3f0ec]/20 hover:text-[#f3f0ec]/50 transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href="mailto:hello@davidrobinson.com"
            className="link-line text-[12px] font-medium tracking-[0.08em] uppercase text-[#f3f0ec]/20 hover:text-[#f3f0ec]/50 transition-colors duration-300"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
