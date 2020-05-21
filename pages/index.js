import { getSortedTunesData } from '../lib/tunes'
import React, { Component } from 'react';
import Link from 'next/link';
import {tunes} from '../config/tunes'
const Index = () => (
<section>
<h1> larkins tunes</h1>;
	{tunes.map(tune =>
<Link href={`/${tune.id}`}>
	<a>{tune.name}</a>
	</Link>
	)}</section> 
);
export default Index;
