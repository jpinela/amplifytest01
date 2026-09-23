"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./../../page.module.css";
import React, { useState, useEffect } from "react";

export default async function User({params}) {
const { clientguid } = await params;

  return (
    <div className={styles.page}>
        <p>
            HJello there! Welcome user: {clientguid}
        </p>
          <div>
            <Link href="/info">Info</Link>
          </div>
          <div>
            <Link href="/">Home página</Link>
          </div>
    </div>
  );
}
