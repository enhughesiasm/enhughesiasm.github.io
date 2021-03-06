import React from 'react';
import { Link } from 'react-router-dom';

import otmPic from './../../../resources/images/OneTrackMinds.jpg';
import otmPicWebp from './../../../resources/images/WebP/OneTrackMinds.webp';
import otmPicJP2 from './../../../resources/images/JP2/OneTrackMinds.jp2';
import otmPicJxr from './../../../resources/images/JXR/OneTrackMinds.jxr';

import LinkButton from './../../shared/link_button';
import PictureContainer from '../../shared/picture_container';
import { TedTalkViewCount } from '../../../resources/data/data';

const Tile_Speaker = () => {
	return (
		<article className='tile is-child notification is-info  has-text-centered'>
			<p className='title is-size-5-mobile'>
				<Link to='/speaking'>speaker</Link>
			</p>
			<div className=''>
				<div>
					Hilarious & helpful talks about mental health at schools,
					conferences & more
				</div>
			</div>
			<div className='notification  is-info'>
				<a
					href='http://bit.ly/custardTED'
					target='_blank'
					rel='noopener noreferrer'>
					<div className='has-text-centered'>
						<PictureContainer
							fallback={otmPic}
							webp={otmPicWebp}
							jp2={otmPicJP2}
							jxr={otmPicJxr}
							alt='One Track Minds'
							title='One Track Minds'
							style={{ maxWidth: '75%' }}
						/>
					</div>
					<p className='subtitle has-text-centered'>
						Watch the TED talk!
					</p>
				</a>
				<p
					className='smallPrint has-text-centered'
					style={{ marginTop: '10px', marginBottom: '10px' }}>
					Over{' '}
					<strong>{TedTalkViewCount.toLocaleString()} people</strong>{' '}
					have enjoyed the surprising link between{' '}
					<strong>anxiety</strong> and <strong>custard</strong>.
				</p>
			</div>

			<LinkButton
				to='/speaking'
				className='button is-small is-rounded is-warning is-inverted'>
				<span>need a speaker? click here</span>
			</LinkButton>

			{/* <div className="content">
				<QuoteCycler	quotes={schoolsQuotes}
					secondsPerQuote={12}
					secondsPerTransition={1.5}
					randomStart={true}
					hideToggle
				/>
			</div> */}
		</article>
	);
};

export default Tile_Speaker;
