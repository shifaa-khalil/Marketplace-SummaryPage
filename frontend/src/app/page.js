"use client";
import Image from "next/image";
import styles from "./page.module.css";
import ServiceCard from "@/components/serviceCard";
import Button from "@/components/button";
import GameCard from "@/components/gameCard";
import SellerCard from "@/components/sellerCard";
import ReviewCard from "@/components/reviewCard";
import PolicyCard from "@/components/policyCard";
import React, { useState } from "react";

export default function Home() {
  const [reviewsExpanded, setReviewsExpanded] = useState(false);

  const reviews = [
    {
      image: "/user.svg",
      name: "keni-",
      date: "October 2021",
      review: "thanks",
    },
    {
      image: "/user.svg",
      name: "keni-",
      date: "October 2021",
      review: "insane coach",
    },
    {
      image: "/noProfile.svg",
      name: "pranmar123",
      date: "June 2021",
      review:
        "Great coaching! Smoke reviewed my game and he gave me really good tips/tricks to watch for and notice! We worked on the laning phase and strategies! 10/10 would recommend for anyone...",
    },
    {
      image: "/noProfile.svg",
      name: "pranmar123",
      date: "June 2021",
      review: "I love it!",
    },
    {
      image: "/noProfile.svg",
      name: "favman",
      date: "June 2020",
      review: "Good experience",
    },
  ];

  const policies = [
    {
      title: "Payment Policy",
      body: "Our payment policy outlines the following key points for your reference. Payment methods accepted include credit or debit cards, PayPal, and bank transfers. Payments are typically due at the time of purchase, unless otherwise specified. Prices are listed in the local currency and are subject to change. Refunds and cancellations are handled according to our Refund Policy, while the security of your payment information is a top priority, with encrypted and secure transactions. Invoices are provided for completed transactions, and taxes and duties may apply as per local regulations.",
    },
    {
      title: "Cancellation Policy",
      body: "Our cancellation policy allows customers to request cancellations by contacting our customer support team. To ensure a smooth process, please provide your order or booking details when making the cancellation request. Please note that specific cancellation deadlines may apply, and we recommend reviewing the terms and conditions associated with your purchase or booking for more information. Our customer support team will be happy to assist you with any questions or concerns regarding cancellations.",
    },
    {
      title: "Refund Policy",
      body: "Our refund policy allows eligible products or services to be considered for refunds. To request a refund, please contact our customer support team with relevant details, and we will review your request according to our policy. If approved, we will initiate the refund process promptly.",
    },
  ];

  const faqs = [
    {
      title: "What if I'm not available at the listed times?",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et semper turpis. Nunc in efficitur nisi. Proin tristique, est nec condimentum consequat, arcu neque convallis ipsum, in tempus mi felis a sem. Maecenas ut tellus id massa pellentesque vulputate. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris bibendum, sapien sit amet convallis cursus, arcu purus eleifend nunc, non facilisis nunc turpis id ex. Sed vulputate, enim sit amet mollis fermentum, nisl lorem posuere tellus, eu eleifend dui neque ut tortor. Pellentesque vel lectus rutrum, scelerisque eros nec, vulputate tellus. Phasellus eleifend mi et eros convallis tincidunt. Sed ac ligula auctor, tempus metus ac, gravida lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean rutrum, ex nec tincidunt semper, felis urna scelerisque erat, non ultricies est nibh sed tortor. Sed sit amet sapien sit amet purus varius dapibus. Suspendisse potenti. Vivamus bibendum pretium condimentum. Mauris dictum finibus sem in tempor.",
    },
    {
      title: "What would a typical coaching session look like?",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et semper turpis. Nunc in efficitur nisi. Proin tristique, est nec condimentum consequat, arcu neque convallis ipsum, in tempus mi felis a sem. Maecenas ut tellus id massa pellentesque vulputate. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris bibendum, sapien sit amet convallis cursus, arcu purus eleifend nunc, non facilisis nunc turpis id ex. Sed vulputate, enim sit amet mollis fermentum, nisl lorem posuere tellus, eu eleifend dui neque ut tortor. Pellentesque vel lectus rutrum, scelerisque eros nec, vulputate tellus. Phasellus eleifend mi et eros convallis tincidunt. Sed ac ligula auctor, tempus metus ac, gravida lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean rutrum, ex nec tincidunt semper, felis urna scelerisque erat, non ultricies est nibh sed tortor. Sed sit amet sapien sit amet purus varius dapibus. Suspendisse potenti. Vivamus bibendum pretium condimentum. Mauris dictum finibus sem in tempor.",
    },
    {
      title: "Can you help players that are new to the game?",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et semper turpis. Nunc in efficitur nisi. Proin tristique, est nec condimentum consequat, arcu neque convallis ipsum, in tempus mi felis a sem. Maecenas ut tellus id massa pellentesque vulputate. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris bibendum, sapien sit amet convallis cursus, arcu purus eleifend nunc, non facilisis nunc turpis id ex. Sed vulputate, enim sit amet mollis fermentum, nisl lorem posuere tellus, eu eleifend dui neque ut tortor. Pellentesque vel lectus rutrum, scelerisque eros nec, vulputate tellus. Phasellus eleifend mi et eros convallis tincidunt. Sed ac ligula auctor, tempus metus ac, gravida lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean rutrum, ex nec tincidunt semper, felis urna scelerisque erat, non ultricies est nibh sed tortor. Sed sit amet sapien sit amet purus varius dapibus. Suspendisse potenti. Vivamus bibendum pretium condimentum. Mauris dictum finibus sem in tempor.",
    },
    {
      title: "Why should I choose you out of all the other coaches?",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et semper turpis. Nunc in efficitur nisi. Proin tristique, est nec condimentum consequat, arcu neque convallis ipsum, in tempus mi felis a sem. Maecenas ut tellus id massa pellentesque vulputate. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris bibendum, sapien sit amet convallis cursus, arcu purus eleifend nunc, non facilisis nunc turpis id ex. Sed vulputate, enim sit amet mollis fermentum, nisl lorem posuere tellus, eu eleifend dui neque ut tortor. Pellentesque vel lectus rutrum, scelerisque eros nec, vulputate tellus. Phasellus eleifend mi et eros convallis tincidunt. Sed ac ligula auctor, tempus metus ac, gravida lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean rutrum, ex nec tincidunt semper, felis urna scelerisque erat, non ultricies est nibh sed tortor. Sed sit amet sapien sit amet purus varius dapibus. Suspendisse potenti. Vivamus bibendum pretium condimentum. Mauris dictum finibus sem in tempor.",
    },
    {
      title: "What are some activities we can do to help me improve?",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et semper turpis. Nunc in efficitur nisi. Proin tristique, est nec condimentum consequat, arcu neque convallis ipsum, in tempus mi felis a sem. Maecenas ut tellus id massa pellentesque vulputate. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris bibendum, sapien sit amet convallis cursus, arcu purus eleifend nunc, non facilisis nunc turpis id ex. Sed vulputate, enim sit amet mollis fermentum, nisl lorem posuere tellus, eu eleifend dui neque ut tortor. Pellentesque vel lectus rutrum, scelerisque eros nec, vulputate tellus. Phasellus eleifend mi et eros convallis tincidunt. Sed ac ligula auctor, tempus metus ac, gravida lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean rutrum, ex nec tincidunt semper, felis urna scelerisque erat, non ultricies est nibh sed tortor. Sed sit amet sapien sit amet purus varius dapibus. Suspendisse potenti. Vivamus bibendum pretium condimentum. Mauris dictum finibus sem in tempor.",
    },
  ];
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
            {reviews.slice(0, 3).map((review, index) => (
              <ReviewCard
                key={index}
                image={review.image}
                name={review.name}
                date={review.date}
                review={review.review}
              />
            ))}
            {reviews.length > 3 &&
              reviewsExpanded &&
              reviews
                .slice(3)
                .map((review, index) => (
                  <ReviewCard
                    key={index}
                    image={review.image}
                    name={review.name}
                    date={review.date}
                    review={review.review}
                  />
                ))}
            {reviewsExpanded ? (
              <button
                className={styles.expand}
                onClick={() => setReviewsExpanded(false)}
              >
                Show less
              </button>
            ) : (
              <button
                className={styles.expand}
                onClick={() => setReviewsExpanded(true)}
              >
                Show all {reviews.length} rows
              </button>
            )}
          </div>
          <div className={styles.policyContainer}>
            <p className={styles.sectionTitle}>Things to keep in mind</p>
            {policies.map((policy, index) => (
              <PolicyCard key={index} title={policy.title} body={policy.body} />
            ))}
          </div>
          <div className={styles.faqContainer}>
            <p className={styles.sectionTitle}>FAQ</p>
            {faqs.map((faq, index) => (
              <PolicyCard key={index} title={faq.title} body={faq.body} />
            ))}
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
    </main>
  );
}
