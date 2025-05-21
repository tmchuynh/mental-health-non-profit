export default function AboutUs() {
  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
      <h1>About InnerLight Elevation</h1>
      <h5>Who we are and what we stand for.</h5>
      <div className="gap-5 grid lg:grid-cols-2">
        <div>
          <p>
            InnerLight Elevation was founded in 2021 by a dedicated group of
            mental health advocates, peer supporters, and licensed clinicians
            who recognized a widening gap between awareness of mental health
            issues and equitable access to care. This team came together after
            witnessing close friends and community members suffer in
            silence—held back by stigma, financial constraints, cultural
            misunderstandings, and systemic barriers.
          </p>
          <p>
            They envisioned a nonprofit that goes beyond traditional models: one
            that doesn't simply provide services but restores a sense of
            dignity, belonging, and hope. The name InnerLight Elevation
            symbolizes our core belief that healing begins within—by recognizing
            the light inside each person. Mental wellness is not about “fixing”
            or “curing” but about lifting people up, walking alongside them, and
            helping them reclaim the inner strength they inherently possess.
          </p>
        </div>
        <div>
          <p>
            What started as a grassroots support circle in Southern California
            has since blossomed into a digitally connected, community-centered
            network. Today, InnerLight Elevation offers peer-led support groups,
            culturally responsive education programs, and inclusive outreach
            initiatives serving youth and adults across diverse backgrounds.
          </p>
          <p>
            Our organization exists to serve those who have historically been
            unheard, unseen, and underserved in the mental health ecosystem. We
            are committed to lighting the path toward resilience, recovery, and
            collective healing—one individual, one community at a time.
          </p>
        </div>
      </div>

      <section className="mt-5">
        <h2>Our Mission</h2>
        <p>
          At InnerLight Elevation, our mission is to elevate mental wellness by
          providing compassionate, peer-driven support systems that honor lived
          experience and foster genuine human connection. We are dedicated to
          delivering culturally aware outreach that recognizes and respects the
          unique backgrounds, identities, and challenges of every individual we
          serve. Our commitment extends to creating and disseminating
          accessible, stigma-free education—designed not only to inform but also
          to empower people with the tools, language, and confidence needed to
          embrace their healing journey with dignity and agency. Through these
          efforts, we aim to dismantle the systemic barriers that prevent
          marginalized and underserved populations from accessing effective
          mental health care.
        </p>
        <p>
          We believe that mental wellness is a collective responsibility, and by
          nurturing resilience, fostering empathy, and promoting inclusive
          support networks, we help individuals reclaim their inner light and
          realize their fullest potential.
        </p>
      </section>

      <section className="mt-5">
        <h2>Our Vision</h2>
        <p>
          InnerLight Elevation envisions a world where mental wellness is
          recognized as a fundamental human right, accessible to all individuals
          regardless of their background or circumstances. We strive to create
          inclusive communities that celebrate diversity, promote understanding,
          and empower individuals to embrace their unique journeys toward
          healing.
        </p>
        <p>
          Our vision is rooted in the belief that every person possesses an
          inherent light within them—a source of strength, resilience, and hope.
          By fostering environments that nurture this inner light, we aim to
          cultivate a society where mental health is prioritized, stigma is
          dismantled, and collective healing becomes a shared reality. We strive
          to be a catalyst for systemic transformation—advocating for policy
          changes, building partnerships, and empowering individuals to become
          advocates themselves. Our vision is one of collective healing, where
          communities thrive through compassion, education, and unwavering
          support, illuminating the path toward mental wellness for generations
          to come.
        </p>
      </section>

      <section className="gap-6 grid lg:grid-cols-8 my-12">
        <h2 className="lg:col-span-2 mb-6">What Makes Us Different</h2>
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:col-span-6">
          <div className="flex flex-col gap-6">
            <div>
              <strong>Built by experts</strong> — our team consists of
              experienced mental health professionals, peer supporters, and
              advocates dedicated to best practices and compassionate care.
            </div>
            <div>
              <strong>Easy to join</strong> — our services are open to all, with
              simple sign-up and no unnecessary barriers to participation.
            </div>
            <div>
              <strong>Peer-driven support</strong> — we offer peer-led groups
              and mentorship, empowering individuals through shared lived
              experience and mutual understanding.
            </div>
            <div>
              <strong>Accessible education</strong> — we provide free,
              stigma-free resources and workshops to help everyone understand
              and prioritize their mental wellness.
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <strong>Community-centered</strong> — our programs are designed
              with and for the communities we serve, ensuring cultural
              responsiveness and inclusivity at every step.
            </div>

            <div>
              <strong>Digital & local reach</strong> — we connect people both
              online and in-person, making support available wherever you are.
            </div>
            <div>
              <strong>Advocacy & outreach</strong> — we work to break down
              stigma, influence policy, and build partnerships that expand
              access to care.
            </div>
            <div>
              <strong>Safe & inclusive</strong> — our spaces are designed to be
              welcoming, trauma-informed, and accessible for all backgrounds and
              identities.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
