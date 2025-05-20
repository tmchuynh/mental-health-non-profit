import Image from "next/image";

export default function MentalHealthPledge() {
  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
      <h1>Mental Health Pledge</h1>
      <h5>
        Join us in taking the Mental Health Pledge to support mental health
        awareness and advocacy.
      </h5>
      <p>
        We are committed to promoting mental health awareness and supporting
        those in need. Join us in taking the Mental Health Pledge to make a
        difference in our community. By repeating this pledge, you are
        committing to raising awareness about mental health issues, reducing
        stigma, and advocating for better mental health resources and support
        systems. Together, we can create a world where mental health is
        prioritized and everyone has access to the help they need.
      </p>

      <div className="gap-7 grid lg:grid-cols-2">
        <section className="flex flex-col gap-6 mt-6">
          <div>
            <h2>InnerLight Elevation Mental Health Pledge</h2>
            <p>
              I solemnly pledge to honor mental health as an integral and vital
              component of overall well-being, recognizing that mental wellness
              is as important as physical health.
            </p>
            <p>
              I commit to fostering empathy, understanding, and respect for
              myself and every person I encounter, acknowledging that mental
              health challenges affect individuals from all walks of life,
              regardless of age, background, or circumstance.
            </p>
            <p>
              I will actively work to dismantle stigma and misconceptions
              surrounding mental health by encouraging open, honest
              conversations—both within my personal circles and in my broader
              community—creating spaces where vulnerability is met with
              acceptance, not judgment.
            </p>
            <p>
              I promise to educate myself continuously about mental health
              conditions, treatments, and resources, knowing that knowledge
              empowers compassion and informed support.
            </p>
            <p>
              I recognize that seeking help is a courageous act and will
              advocate for accessible, affordable, and culturally sensitive
              mental health care for all.
            </p>
            <p>
              I vow to listen attentively and without prejudice to those sharing
              their mental health struggles, offering kindness, patience, and
              unwavering support as they navigate their unique healing journeys.
            </p>
            <p>
              I commit to promoting and cultivating environments—in my home,
              workplace, schools, and community—that prioritize mental wellness,
              inclusivity, safety, and accessibility.
            </p>
            <p>
              I acknowledge the importance of practicing intentional self-care,
              setting healthy boundaries, and nurturing my own mental and
              emotional well-being, understanding that I cannot fully support
              others without tending to myself.
            </p>
            <p>
              I will challenge systemic inequities and advocate for policies
              that improve mental health services and protect the rights and
              dignity of those affected by mental health conditions.
            </p>
            <p>
              I pledge to stand in solidarity with individuals and communities
              impacted by mental health challenges, amplifying their voices and
              celebrating their resilience.
            </p>
            <p>
              Together, through collective awareness, compassion, and action, we
              will build a society where mental health is embraced with the
              dignity, respect, and care it deserves.
            </p>
            <p>
              This is my pledge: to be an advocate, an ally, a listener, and a
              learner—committed to transforming mental health from a private
              struggle into a shared journey toward hope, healing, and
              wholeness.
            </p>
          </div>
          <Image
            src={
              "https://images.unsplash.com/photo-1579208575657-c595a05383b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVudGFsJTIwaGVhbHRofGVufDB8fDB8fHww"
            }
            alt="Mental Health Pledge"
            width={600}
            height={400}
            className="shadow-lg rounded-lg w-full lg:h-full object-cover"
          />
        </section>
        <Image
          src={
            "https://images.unsplash.com/photo-1604881991720-f91add269bed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVudGFsJTIwaGVhbHRofGVufDB8fDB8fHww"
          }
          alt="Mental Health Pledge"
          width={600}
          height={400}
          className="shadow-lg rounded-lg w-full lg:h-full object-cover"
        />
      </div>
    </div>
  );
}
