import SingleTeamCard from "./widget/SingleTeamCard";

function OurTeamSection() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10 flex flex-col gap-6">
          <h2 className="text-3xl md:text-5xl font-bold  text-primary">
            Our Team
          </h2>
          <p className="text-muted-foreground mt-2 text-lg">
            Our team of forward-thinking legal professionals consists of
            reputable and highly qualified professionals with impeccable legal
            expertise and specialties in navigating complexities of Tanzania’s
            evolving legal landscape and cross-border advisory with agility,
            precision, and professionalism
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <SingleTeamCard
            image={"/daniel1.png"}
            title={"Daniel John Paul"}
            subtitle={"Partner"}
            description={
              <div className="grid gap-6">
                <p>
                  Daniel John Paul is a partner at Leyrand and Advocate of the
                  High Court of Tanzania. He is an accomplished legal
                  practitioner with a strong specialization in Employment &
                  Labour Law, Mining Law, Trusts, and Estate Law with over five
                  years of experience in the mining sector in Tanzania and
                  beyond.,{" "}
                </p>
                <p>
                  Daniel has been instrumental in navigating complex employee
                  relations across multiple jurisdictions, including Tanzania,
                  the Democratic Republic of Congo, Zambia, South Africa,
                  Mozambique, Namibia, Mali, the Ivory Coast, and Saudi Arabia.
                </p>
                <p>
                  Throughout his career, Daniel has supported multinational
                  mining operations in Tanzania and beyond in critical areas
                  such as employment compliance, collective bargaining, dispute
                  resolution, policy harmonization, and labour risk management.
                  His ability to foster constructive partnerships between
                  employers and trade unions has helped maintain stable,
                  compliant workplaces.
                </p>
                <p>
                  In addition to his expertise in labour and mining law, Daniel
                  is a trusted advisor in Family and Succession Law. He
                  skillfully guides clients through sensitive matters involving
                  inheritance, estate planning, and domestic disputes, offering
                  solutions that are both legally sound and compassionately
                  delivered.
                </p>
                <p>
                  Daniel holds a Bachelor of Laws (LL.B) degree from Mzumbe
                  University in Morogoro and a Postgraduate Diploma in Legal
                  Practice from the Law School of Tanzania. He is a member of
                  the Tanganyika Law Society and East Africa Law Society.
                </p>
              </div>
            }
          />
          {/* <SingleTeamCard
            image={"/biota1.png"}
            title={"BIOTO MBALAKAI"}
            subtitle={"Partner"}
            description={
              <div className="grid gap-6">
                <p>
                  Adv. Bioto is a Partner at Leyrand, specializing in regulatory
                  compliance and advisory across telecommunications law, data
                  protection, employment and labor law, and corporate and
                  commercial matters. With over five years of legal experience,
                  she offers a sharp, solutions-driven approach to complex legal
                  and regulatory challenges. She advises clients across key
                  sectors including financial services, telecommunications &
                  ICT, startups, and the hospitality industry on corporate
                  governance, risk management, and regulatory affairs. Known for
                  her meticulous attention to detail, strategic adaptability,
                  and regulatory foresight, she is deeply committed to
                  delivering practical, business-aligned legal guidance.
                </p>
                <p>
                  She holds a Bachelor of Laws (LL.B) from Mzumbe University and
                  a Postgraduate Diploma in Legal Practice from the Law School
                  of Tanzania. She is a member of the Tanganyika Law Society.
                </p>
              </div>
            }
          /> */}
          <SingleTeamCard
            image={"/new_masalu.png"}
            title={"Masalu N Masanja"}
            subtitle={"Managing Partner"}
            description={
              <div className="grid gap-6">
                <p>
                  Masalu N Masanja is an advocate of high court of Tanzania and
                  a managing partner at Leyrand. He is reputable international
                  development lawyer with over six years working experience in
                  sub-Saharan Africa and North and Middle East with the United
                  Nations. He specialises on Project Finance, publi-private
                  partnerships, investment law, carbon markets, Banking and
                  finance, Fintech, Hedge funds, SME financing, Immigration,
                  corporate and mining law.
                </p>
                <p>
                  Masalu has national and international experience in
                  development financing advising multiple clients on different
                  field which bring him a perfect blend between national and
                  international standards.{" "}
                </p>
                <p>
                  He has experience of working with United Nations,
                  International Financial institutions( world Bank, KFW, Africa
                  development bank, and other bilateral agencies). Masalu has a
                  Bachelor of Laws from Mzumbe University Morogoro, Post
                  graduate Diploma in Legal Practice, Masters of Laws(LL.M) in
                  Human Rights and Democratization in Africa with Distinction
                  from University of Pretoria South Africa. Additionally Masalu
                  has a Bachelor of Arts in Philosophy from Uganda Martyrs
                  University and currently he is pursuing a Masters in
                  Development Finance with Stellenbosch University in South
                  Africa.
                </p>
                <p>
                  Masalu is also member of Tanganyika law society, East Law
                  Society, and Pan African Lawyers Union.{" "}
                </p>
              </div>
            }
          />
          <SingleTeamCard
            image={"/frank.png"}
            title={"Frank William"}
            subtitle={"Partner"}
            description={
              <div className="grid gap-6">
                <p></p>
              </div>
            }
          />
          <SingleTeamCard
            image={"/caroline.png"}
            title={"Caroline Mutalemwa"}
            subtitle={"Banking and Finance Legal Specialist & Partner"}
            description={
              <div className="grid gap-6">
                <p>
                  Caroline Abela Mutalemwa is a seasoned corporate lawyer
                  currently working for CRDB Bank Plc as a Legal Documentation
                  Officer. Her area of specialty is digital, corporate, and
                  banking law, having more than five years of hands-on legal
                  experience working in consultancy, in-depth research, and
                  advocacy as well. She is vital in navigating the complex legal
                  frameworks that support the bank’s operations and strategic
                  goals. Her work ensures regulatory compliance, contract
                  integrity, proper preparation of lending agreements, and
                  effective risk management in the rapidly evolving financial
                  sector.
                </p>
                <p>
                  Holding a Master’s Degree in Commercial Law from Mzumbe
                  University of Morogoro, Caroline Abela Mutalemwa brings both
                  academic depth and practical insight to the legal profession.
                  This extends to advising on high-level corporate transactions,
                  interpreting regulatory policies, and supporting digital
                  transformation initiatives within the banking industry. Known
                  for her analytical rigor and attention to detail, she has
                  become a trusted employee within the organization and even
                  with other stakeholders she collaborates with, like East
                  Africa Law Society (EALS), The National Social Security Fund
                  (NSSF), and others.
                </p>
                <p>
                  Beyond her professional role, Caroline Abela Mutalemwa has
                  contributed to the broader legal discourse through published
                  writing for the Institute of Judicial Administration (IJA) on
                  the critical analysis of the digital and banking laws in the
                  protection of the right to privacy and compensation against
                  unauthorized transactions. These publications not only reflect
                  their commitment to knowledge-sharing but also underscore
                  their strong research and writing skills. As both a
                  practitioner and thought leader, she continues to influence
                  the legal landscape in banking and commercial law.
                </p>
              </div>
            }
          />
          {/* public/laltaikas Background Removed.png */}
          <SingleTeamCard
            image="/laltaikas Background Removed.png"
            title="Dr. Elifuraha Laltaika"
            subtitle="Natural Resources Mining, Oil and Gas legal Specialist"
            description={
              <div className="grid gap-6">
                <p>
                  Dr. Elifuraha Laltaika is a Natural Resources Law specialist
                  at Leyrand, with extensive experience in mining, oil and gas,
                  environmental law, and Indigenous Peoples' rights. He combines
                  strong academic grounding with hands-on advisory experience,
                  working with governments, multilateral institutions, and
                  private sector clients across Africa.
                </p>
                <p>
                  He is a Senior Lecturer in Law at the Faculty of Law, Tumaini
                  University Makumira, and previously served as a Visiting
                  Researcher at Harvard Law School. A Fulbright Scholar, Dr.
                  Laltaika holds a Doctor of Juridical Science (S.J.D.) from the
                  University of Arizona, Master of Laws (LL.M.) degrees from the
                  University of Oregon in the United States and the University
                  of KwaZulu-Natal in South Africa, and a Bachelor of Laws
                  (LL.B.) from the University of Dar es Salaam.
                </p>
                <p>
                  Dr. Laltaika's expertise spans international law,
                  constitutional law, jurisprudence, human rights law, natural
                  resources law, mining, oil and gas law, and Indigenous
                  Peoples' rights. His work is informed by comparative and
                  interdisciplinary approaches, allowing him to address complex
                  legal and policy issues in investment and development
                  contexts.
                </p>
                <p>
                  He has advised governments, lenders, United Nations agencies,
                  the World Bank Group, IFAD, and multinational companies on
                  Indigenous Peoples and environmental and social standards for
                  major investment projects across Africa. His work has focused
                  on the practical application of international frameworks such
                  as the UN Guiding Principles on Business and Human Rights, IFC
                  Performance Standard 7, and the World Bank Environmental and
                  Social Standard 7. Through this work, he has contributed to
                  the negotiation of Free, Prior and Informed Consent (FPIC)
                  agreements and the development of Indigenous Peoples Planning
                  Frameworks in multiple jurisdictions.
                </p>
                <p>
                  In Tanzania, Dr. Laltaika has provided legal and policy advice
                  on large-scale infrastructure projects, including the East
                  African Crude Oil Pipeline (Uganda–Tanzania) and the Standard
                  Gauge Railway project. He has also consulted for the World
                  Bank Group and the International Fund for Agricultural
                  Development.
                </p>
                <p>
                  Dr. Laltaika has held several international academic
                  appointments, including serving as the founding Global South
                  Visiting Scholar at the University of British Columbia, as a
                  visiting scholar at the University of Bayreuth in Germany, and
                  at the Stellenbosch Institute for Advanced Study in South
                  Africa. He has guest lectured and presented research at
                  universities in Africa, Asia, Europe, and North America as
                  part of collaborative research initiatives.
                </p>
                <p>
                  From 2017 to 2019, he served as an expert member of the United
                  Nations Permanent Forum on Indigenous Issues following
                  appointment by the President of the UN Economic and Social
                  Council. He previously worked as a Senior Fellow at the Office
                  of the United Nations High Commissioner for Human Rights in
                  Geneva.
                </p>
                <p>
                  An Advocate of the High Court of Tanzania since 2010, Dr.
                  Laltaika's expertise has been recognised by the African Court
                  on Human and Peoples' Rights, including in the Ogiek
                  Indigenous Peoples of Kenya reparations case. In 2022, he
                  received the Sivtlana Kravchenko Environmental Rights Award in
                  Oregon, United States, in recognition of his contribution to
                  environmental justice and community rights.
                </p>
                <p>
                  Dr. Laltaika currently chairs the Community of Practice, a
                  regional think tank bringing together practitioners and
                  scholars from Eastern and the Horn of Africa who work on
                  issues related to customary land tenure and the protection of
                  traditional livelihoods.
                </p>
              </div>
            }
          />
          <SingleTeamCard
            image={"/icon.svg"}
            title={"Noel James Mdoe"}
            subtitle={
              "Climate change, environmental and sustainable finance Legal Specialist."
            }
            description={
              <div className="grid gap-6">
                <p>
                  Noel James Mdoe is a Tanzanian environmental, natural
                  resources, and climate lawyer, and an ESG specialist at
                  Leyrand with over seven years of cumulative legal experience
                  spanning national, regional, and international contexts. He is
                  an Advocate of the High Court of Tanzania and holds a Master
                  of Laws (LLM) in Environmental and Natural Resources Law from
                  University College Cork, Ireland, a Postgraduate Diploma in
                  Legal Practice from the Law School of Tanzania, and a Bachelor
                  of Laws from Mzumbe University.
                </p>
                <p>
                  Noel has undertaken advanced professional training in climate
                  law and governance, sustainable finance for climate and
                  energy, project management, and climate leadership. He is a
                  member of the Tanganyika Law Society and the East Africa Law
                  Society, and is actively affiliated with international
                  professional networks including the UK Environmental Law
                  Association, the Environmental Lawyers Collective Action, and
                  the Climate Law and Governance Initiative.
                </p>
                <p>
                  His work focuses on environmental governance, climate policy,
                  carbon market regulation, and ESG compliance. He has
                  particular expertise in Article 6 mechanisms under the Paris
                  Agreement, environmental and social safeguards, land and
                  resource rights, and benefit-sharing frameworks. Noel has
                  conducted extensive research on carbon markets and has worked
                  closely with governments, civil society organizations, project
                  developers, investors, and international partners on carbon
                  project design, permitting, MRV systems, and the application
                  of high-integrity standards.
                </p>
                <p>
                  Professionally, Noel has held advisory and enforcement-related
                  roles with the European Network of Prosecutors for the
                  Environment and Tanzania's National Environmental Management
                  Council. He has also supported major infrastructure and energy
                  projects, including the East African Crude Oil Pipeline, where
                  he contributed to environmental compliance, stakeholder
                  engagement, and the implementation of social and environmental
                  safeguards.
                </p>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}

export default OurTeamSection;
