import Image from "next/image";
import styles from "./page.module.css";
import ServiceCard from "@/components/serviceCard";
import Button from "@/components/button";
import GameCard from "@/components/gameCard";
import SellerCard from "@/components/sellerCard";
import ReviewCard from "@/components/reviewCard";

export default function Home() {
  return (
    <main className={styles.main}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <div className={styles.container}>
        <div className={styles.leftside}>
          <Image
            className={styles.mainimg}
            src="/master.svg"
            alt="master coaching"
            layout="responsive"
            width={100}
            height={37}
            priority
          />
          <div className={styles.description}>
            <h1>Description</h1>
            <p>
              Hi guys, I'm Claudio aka Smoke and I'm 25!! I've always been
              passionate about video games, especially League of Legends. I
              started at the end of S4, reaching Master elo in s10-11-12 as
              support (atm MASTER 208lp).
            </p>
            <p>
              I have 3 years of full time coaching experience. I have been
              playing competitive League of Legends for 6years on EUW reaching
              PG Nats 2° Div.
            </p>
            <p>
              Ranking Master as a Support main, being able to climb to high
              diamond in every single role
            </p>
            <p>My best pick are Alistar, Thresh, Blitz, Renata and Kalista</p>
            <p>
              In my coaching plan you will learn and quickly become better at:
            </p>
            <p>
              Wave Management - Spacing - Trading - General Macro - Vision
              Control - Builds - Matchups
            </p>
            <p>What does one full session entail?</p>
            <ol>
              <li>Pre-game discussion - skill, desired rank (w/ op.gg)</li>
              <li>Live game commentating</li>
              <li>VOD Review Analysis</li>
              <li>Post game talk</li>
            </ol>
          </div>
          <GameCard
            image="/league.svg"
            game="League of Legends"
            languages="English, French and Italian"
          />
          <div className={styles.sellerContainer}>
            <p className={styles.sectionTitle}>Seller</p>

            <SellerCard
              image="/profile.svg"
              name="_SMOKE"
              message="Hi, I'm Smoke!I've always been passionate about video games, especially League of Legends. I started at the end of S4, reaching Master elo in S10 as support"
            />
          </div>
          <div className={styles.reviewContainer}>
            <p className={styles.sectionTitle}>Reviews</p>
            <ReviewCard
              image="/user.svg"
              name="keni-"
              date="October 2021"
              review="thanks"
            />
            <ReviewCard
              image="/user.svg"
              name="keni-"
              date="October 2021"
              review="insane coach"
            />
            <ReviewCard
              image="/noProfile.svg"
              name="pranmar123"
              date="June 2021"
              review="Great coaching! Smoke reviewed my game and he gave me really good tips/tricks to watch for and notice! We worked on the laning phase and strategies! 10/10 would recommend for anyon... +more"
            />
          </div>
        </div>
        <div className={styles.rightside}>
          <div className={styles.row}>
            <div className={styles.title}>Coaching</div>
          </div>
          <p className={styles.heading}>
            | Master+ League of Legends coaching | All roles |
          </p>
          <p className={styles.subheading}>
            My coaching: macro - wave management - meta discussions - vods -
            decision making in game - vision - positioning - best picks -
            match-up and worse lanes - build decisions - In-game settings
          </p>
          <div className={styles.servicesContainer}>
            <ServiceCard
              title="VOD review 30m"
              details="VOD review of one of your games and I will point out the mistakes you made ... +more"
              price="6.35"
            />
            <ServiceCard
              title="Duo coaching 1h"
              details="Duo coaching - how to generally play the game in every situation (builds/ru... +more"
              price="12.71"
            />
            <ServiceCard
              title="MASTER SUPPORT 4h"
              details="4h of pre-game discussion (w/ opgg) ,skill,desired rank, Live game commenta... +more"
              price="45.54"
            />
          </div>
          <Button text="BUY" />
          <div className={styles.protectionNote}>
            <p>
              For your own protection and for Challengermode to assist in any
              potential disputes, it's important that you never make any
              payments outside of the platform.
            </p>
            <Image
              src="/protectionNote.svg"
              alt="protectionNote"
              width={32}
              height={32}
            />
          </div>
        </div>
      </div>
      {/* <div className={styles.description}>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div> */}
    </main>
  );
}
