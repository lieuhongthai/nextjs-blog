import { useEffect } from "react";
import { useRouter } from "next/router";
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css';
import Link from "next/link";
import Image from 'next/image'

// import { } from "serv"
const name = 'Your Name'
export const siteTitle = "Next.js app";
const Layout = ({ children, home, isLogin }) => {
	const router = useRouter();
	useEffect(() => {

	}, [])
	return (
		<div>
			<header className={styles.header}>
				{home ? (
					<>
						<Image
							priority
							src="/images/profile.jpg"
							className={utilStyles.borderCircle}
							height={144}
							width={144}
							alt={name}
						/>
						<h1 className={utilStyles.heading2Xl}>{name}</h1>
					</>
				) : isLogin ? (<></>) : (
					<>
						<Link href="/">
							<a>
								<Image
									priority
									src="/images/profile.jpg"
									className={utilStyles.borderCircle}
									height={108}
									width={108}
									alt={name}
								/>
							</a>
						</Link>
						<h2 className={utilStyles.headingLg}>
							<Link href="/">
								<a className={utilStyles.colorInherit}>{name}</a>
							</Link>
						</h2>
					</>
				)}
			</header>
			<main>{children}</main>
			{!home || isLogin && (
				<div className={styles.backToHome}>
					<Link href="/">
						<a>← Back to home</a>
					</Link>
				</div>
			)}
		</div>
	)
}

export default Layout;