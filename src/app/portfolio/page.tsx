import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { PortfolioHero } from '@/components/sections/PortfolioHero'
import { PortfolioStats } from '@/components/sections/PortfolioStats'
import { PortfolioGroupHeading } from '@/components/sections/PortfolioGroupHeading'
import { PortfolioCompanyCard } from '@/components/sections/PortfolioCompanyCard'
import { PortfolioCTA } from '@/components/sections/PortfolioCTA'

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'The businesses Everlough acquires, stabilises and operates. Four companies held deliberately, run closely — two core engines and a small set of additional businesses.',
}

export default function PortfolioPage() {
  return (
    <>
      <Navbar />

      <main className="pt-[90px] bg-bg">
        {/* ── Hero ── */}
        <PortfolioHero />

        {/* ── Stats bar ── */}
        <PortfolioStats />

        {/* ════════════════════════════
            GROUP 1 — Two core engines
            ════════════════════════════ */}
        <PortfolioGroupHeading>
          Two businesses at the centre of the group.
        </PortfolioGroupHeading>

        {/* Data Direct Technology */}
        <PortfolioCompanyCard
          tag="Core Engine"
          title="Data Direct Technology, one of Ireland's longest-established IT distributors."
          bodyLeft="Hardware, software and managed services to mid-market businesses and the public sector across Ireland. The business has operated for more than three decades through every major shift in enterprise IT — from on-premise to cloud, from procurement to managed service — and remains profitable, cash-generative and deeply embedded with its customer base."
          imageSrc="/images/portfolio/datadirect-tech-hero.jpg"
          imageAlt="Data Direct Technology — B2B online shop"
        />

        {/* Data Direct Intelligence */}
        <PortfolioCompanyCard
          tag="Core Engine"
          title="Data Direct Intelligence, the data, analytics and applied-AI services engine of the group."
          bodyLeft="Working with regulated industries across the UK and Ireland, the company helps customers structure their data, build reporting and decision tooling, and deploy AI where the economics are proven rather than speculative."
          bodyRight="Built deliberately as a complement to Data Direct Technology — a services engine alongside a distribution engine — and the second of the group's two core engines."
          imageSrc="/images/portfolio/datadirect-intelligence.jpg"
          imageAlt="Data Direct Intelligence — data and analytics"
        />

        {/* ═══════════════════════════════════════════
            GROUP 2 — Additional businesses
            ═══════════════════════════════════════════ */}
        <PortfolioGroupHeading>
          A small set of additional businesses around the engines.
        </PortfolioGroupHeading>

        {/* Schoolhouse Lane */}
        <PortfolioCompanyCard
          tag="Creative consultancy"
          title="Schoolhouse Lane, AI Powered & Creative Design."
          bodyLeft="Schoolhouse Lane is an AI-powered creative design and development company built on a single premise: design is risk mitigation with asymmetric upside. While our outputs live in the creative and technical realm, our function is operational engineering for hyper-growth."
          bodyRight="We specialise in working with Private Equity and VCs to create new asset classes through strategic creative positioning. In an environment where traditional operations yield only linear, marginal gains, we deploy design as a strategic high-leverage bet — the only lever capable of generating a truly non-linear return on capital."
          imageSrc="/images/portfolio/schoolhouse-hero.jpg"
          imageAlt="Schoolhouse Lane — AI-powered creative design"
        />

        {/* Funteron */}
        <PortfolioCompanyCard
          tag="Operating Company"
          title="Funteron, a specialist software business held by Everlough."
          bodyLeft="In line with the 2026 strategy, the business is being prepared for an orderly exit. The decision is not a reflection on the company — Funteron is operationally sound and continues to perform."
          bodyRight="Its growth path requires the sustained attention of someone whose centre of gravity is in specialist software, which is no longer where Everlough's is."
          imageSrc="/images/portfolio/funteron.jpg"
          imageAlt="Funteron — specialist software"
        />

        {/* Vivo Hotels */}
        <PortfolioCompanyCard
          tag="Operating Company"
          title="Vivo Hotels — Everlough's hospitality operating company, running a portfolio of design-led properties."
          bodyLeft="The brand sits at the intersection of considered interior design and warm, personalised service — positioned deliberately away from the commoditised mid-market and towards guests who treat a hotel stay as part of the experience rather than a logistical necessity."
          bodyRight="The business is operated directly within the group, with Everlough's operational discipline applied to yield management, staffing structure and property presentation."
          imageSrc="/images/portfolio/vivo-hotels.jpg"
          imageAlt="Vivo Hotels — design-led hospitality"
        />

        {/* ── CTA banner ── */}
        <PortfolioCTA />
      </main>

      <Footer />
    </>
  )
}
