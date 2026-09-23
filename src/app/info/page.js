"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./../page.module.css";
import React, { useState, useEffect } from "react";

export default function Info() {
  const [examCatalog, setExamCatalog] = useState();
  useEffect(() => {
    async function loadExams() {
      try {
        const res = await fetch(`/api/get_data?lang=EN`);
        const json = await res.json();
        if (json.success) {
          setExamCatalog(json.data);
        }
      } catch (err) {
        console.error("Failed to load exams:", err);
      } finally {

        
      }
    }
    loadExams();
  }, []);

  return (
    <div className={styles.page}>
        <p>
            HJello there! Welcome! {examCatalog}
        </p>
          <div>
            <Link href="/">Home página</Link>
        </div>
        <div>
            <Link href="/user/uj33">User 33</Link>
        </div>
        <div>
            <Link href="/user/qu40">User 40</Link>            
        </div>
    </div>
  );
}
