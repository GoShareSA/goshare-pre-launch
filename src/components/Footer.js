import React from 'react'
import { FaTwitter, FaFacebook, FaWhatsapp, FaInstagram, FaYoutube } from 'react-icons/fa';
import IconButton from '@material-ui/core/IconButton';
import Timmer from './Timmer';

export default function Footer() {
	return (
		<footer className="w-full bg-yellow-500 font-poppins h-auto fixed bottom-0 left-0">
			<div className="grid md:grid-flow-col m-8 justify-items-center pb-8 pt-8">
				<div>
					<p className=" text-sm font-bold text-center md:text-lg"><a href="https://www.youtube.com/watch?v=ViKfuSn3R3I" target="_self"><mark>Watch a Video</mark></a></p>
					<p className=" text-sm font-bold md:text-lg">&copy; Copyright by {new Date().getFullYear()} <mark>GoShare SA</mark></p>
				</div>
				<div className="grid">
					<ul className="flex">
						<li>
							<IconButton className="social-icon-hover" name="Twitter">
								<a
									href="https://mobile.twitter.com/Gosharesa"
									rel="noopener noreferrer"
									target="_blank"
									aria-label="twitter-link"
								><FaTwitter size="1.2em" color="#1DA1F2" /></a>
							</IconButton>
						</li>
						<li>
							<IconButton className="social-icon-hover" name="Facebook">
								<a href="https://m.facebook.com/GOSHARESA/"
									rel="noopener noreferrer"
									target="_blank"
									aria-label="facebook-link"
								><FaFacebook size="1.2em" color="#4267B2" /></a>
							</IconButton>
						</li>
						<li>
							<IconButton className="social-icon-hover" name="Whatsapp">
								<a href="https://wa.me/"
									rel="noopener noreferrer"
									target="_blank"
								><FaWhatsapp size="1.2em" color="green" /></a>
							</IconButton>
						</li>
						<li>
							<IconButton className="social-icon-hover" name="Instagram">
								<a href="https://www.instagram.com/goshare_sa/"
									rel="noopener noreferrer"
									target="_blank"
									aria-label="instagram-link"
								><FaInstagram size="1.2em" color="#E1306C" /></a>
							</IconButton>
						</li>
						<li>
							<IconButton className="social-icon-hover" name="Youtube">
								<a href="https://m.youtube.com/channel/UCPpTzmg0VlTw5zRfg7vjlgA"
									rel="noopener noreferrer"
									target="_blank"
									aria-label="instagram-link"
								><FaYoutube size="1.2em" color="red" /></a>
							</IconButton>
						</li>
					</ul>
				</div>
				<Timmer/>
			</div>
		</footer>
	)
}
