/* eslint-disable @next/next/link-passhref */
import React, { useState } from "react";
import Link from 'next/link'
import Image from 'next/image'
import styles from './suggestions.module.css'

function Suggestions({ data }) {
    console.log(data);
    return (
        <section className={styles.suggestions}>
            <div className="grid">
                <div className={styles.suggestions__title}>
                    <h2>Sugestões para você</h2>

                    <select
                        onChange={(e) => {console.log(e.target.value)}}
                        >
                        <option value="">ordernar por</option>
                        <option value="min-price">menor preço</option>
                        <option value="az">a - z</option>
                        <option value="recent">mais recentes</option>
                    </select>
                </div>
                <div className="products">
                    <div className="product">
                        <ul>
                            {data?.map((post, id) => (
                                <li key={id}>{post.title}</li>
                            ))}
                        </ul>
                        <p className="product__name">Nome do produto</p>
                        <p className="product__price">R$ 30,00</p>
                        <p className="btn-primary">ver produto</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    return {
        props: {
            data,
        },
    }
}

export default Suggestions