import { getSortedPostsData } from '../../lib/posts'
import Layout, { siteTitle } from '../../components/components/layout'
import utilStyles from '../../styles/styles/utils.module.css'
import Head from 'next/head'
import Link from 'next/link'
import Date from '../../components/components/date'
export async function getStaticProps() {
	const allPostsData = getSortedPostsData()
	return {
		props: {
			allPostsData
		}
	}
}
export default function Home({ allPostsData }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			{/* Keep the existing code here */}

			{/* Add this <section> tag below the existing <section> tag */}
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h1 className={utilStyles.headingLg}>Brief introduction</h1>
				<div className={utilStyles.lightText}>
					Hi! I'm a software engineer with a self-starter's mindset.
				</div>
				<div>
					I wrote my first app when I was 17. The little app luckily got 50k+ downloads.
					Since then, I've been an engineer professionally for 4 years, worked as a fullstack engineer at 2 startups, along with a few side projects.
					Thanks to that, I became a generalist with hands-on experience in front-end,
					back-end, system, and game development.
					Previously, I was a tech lead at Archaean building a cloud IDE for HPC
					development.
				</div>
				<h1 className={utilStyles.headingLg}>Work experience</h1>
				<div className={utilStyles.lightText}>
					Entrepreneur First, Singapore, Jul - Oct 2020
				</div>
				<div>
					I joined Entrepreneur First in the hope to find a co-founder and build a $B startup.
					I worked with 4 different co-founders, experimented with ideas about remote
					work and passion economy, talked to 100 customers to validate problems, and
					pitched to investors. Unfortunately, I didn't find any strong project and decided
					to leave the program. More importantly, I realized that forcing me to find a $B
					idea and chasing after investors at such an early stage won't work for me.
					That being said, the experience was transformation, I learned a lot about what to
					expect at a hyper-growth startup.
				</div>
				{/* transformative */}

				<h1 className={utilStyles.headingLg}>Development Lead</h1>
				<div className={utilStyles.lightText}>
					Archaean, Singapore, Jan - Jul 2020
				</div>
				<div>
					After a year of working as an engineer, I became the company's tech lead. I was
					making sure the product team are happy and deliver on time. I directly designed
					system architecture, improved agile process, prioritized product backlog,
					delegated tasks to appropriate people, as well as being hands-on in complex
					tasks.
					We used Jira, Github, Github Actions, Terraform, Amazon S3, and ECR to
					accelerate our development process. For hosting our front-end, we used Amazon
					S3 and CloudFront. For orchestrating back-end APIs, we used Docker and
					Amazon ECS. For orchestrating client IDEs, we used K8S and Amazon EKS.
				</div>

				<h1 className={utilStyles.headingLg}>Full-stack Engineer</h1>
				<div className={utilStyles.lightText}>
					Archanan, Singapore, Jan - Dec 2019
				</div>
				<div>
					Archanan is a cloud IDE for developing HPC applications. I joined the startup as
					one of the first two engineers. As a full-stack engineer, I was responsible for
					building both the first front-end and back-end components, as well as being
					involved in designing solutions for specific technical problems.
					On the front-end, we used React, TypeScript, and Sass. On the back-end, we used
					C for system, Go for networking, and Amazon Cognito for authentication.
				</div>

				<h1 className={utilStyles.headingLg}>Co-founder & CTO</h1>
				<div className={utilStyles.lightText}>
					YouMeTrips, Vietnam, Oct 2018 - Jun 2019
				</div>
				<div>
					YouMeTrips is a social platform connecting Vietnamese travelers together and to
					foreign agencies. I co-founded YouMeTrips with a friend who ran a small travel
					agency in Vietnam.
					I designed the first version of the product, pitched to a startup incubator, and got
					a $3k equity-free investment. I hired 3 interns to build the product. We released
					the first version but didn't get good tractions. We ran out of cash. I was a student
					and had a full-time job at the time. I was burnt out and had to shut down.
					We used React Native, TypeScript, Django, PostgreSQL, AWS, and Github to
					develop the product.
					The app was deleted but you can still see it on APK Pure
				</div>

				<h1 className={utilStyles.headingLg}>Freelance Engineer</h1>
				<div className={utilStyles.lightText}>
					Self-employed, Vietnam, Jun 2018 - Dec 2018
				</div>
				<div>
					After working as a full-time engineer for a while, I wanted to give freelancing a
					try. I built a team of five, where I worked as both a tech lead and a product
					manager. I helped to manage the product development while looking for and
					negotiating projects. We shipped an event check-in platform for First Interactive
					Technology.
					We used React Native,Angular.js, TypeScript, Node.js, PostgreSQL, and Github to
					develop the product.
				</div>

				<h1 className={utilStyles.headingLg}>Full-stack Engineer</h1>
				<div className={utilStyles.lightText}>
					YouthDev, Vietnam, Jun 2017 - Jun 2018
				</div>
				<div>
					YouthDev is an IT agency in Vietnam building products for foreign startups.
					I joined the company as a full-stack engineer developing back-end and mobile
					application of Vievie, a healthcare platform connecting Vietnamese patients and
					professionals. I became a team lead after 6 months but quit soon after.
					We used React Native, Java, Kotlin, MySQL, GitLab, and self-hosted servers to
					develop the product.
					Before joining Vievie, I built an NLP service using an SVM ML model to categorize
					Vietnamese articles for BuzzSumo.
				</div>

				<h1 className={utilStyles.headingLg}> Side projects</h1>
				<div className={utilStyles.lightText}>
					Blog About Software Engineering
				</div>
				<div>
					I write about software engineering, open-source, and tech. The purpose is to help
					other engineers, be helpful, make friends, and build an audience.
					I previously wrote on Medium, but recently migrated to Hashnode and DEV.to.
					🔗 Link: https://blog.phuctm97.com.
				</div>

				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href={`/posts/${id}`}>
								<a>{title}</a>
							</Link>
							<br />
							<small className={utilStyles.lightText}>
								<Date dateString={date} />
							</small>
						</li>
					))}
				</ul>

			</section>
		</Layout>
	)
}