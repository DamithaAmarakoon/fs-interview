import { useEffect, useState } from 'react';
import './Rectangles.css';

/**
 * Scenario:
 * - We want to determine if the 2 rectangles are colliding
 */
export function Rectangles() {
	// TODO: Implement
	const [isColliding, setIsColliding] = useState(false);

	// rectangle A
	const topA = 20;
	const leftA = 200;
	const widthA = 160;
	const heightA = 80;

	// rectangle B
	const topB = 50;
	const leftB = 50;
	const widthB = 120;
	const heightB = 100;

	interface IRectangle {
		x: number;
		y: number;
		w: number;
		h: number;
	}

	function collides(rectA: IRectangle, rectB: IRectangle): boolean {
		if (
			rectA.x < rectB.x + rectB.w &&
			rectA.x + rectA.w > rectB.x &&
			rectA.y < rectB.y + rectB.h &&
			rectA.h + rectA.y > rectB.y
		)
			return true;
		else return false;
	}

	useEffect(() => {
		setIsColliding(
			collides(
				{ x: topA, y: leftA, w: widthA, h: heightA },
				{ x: topB, y: leftB, w: widthB, h: heightB }
			)
		);
	}, []);

	return (
		<div className='container'>
			<p>The Visualizer</p>
			<div className='canvas'>
				<div
					className='rectangle a'
					style={{ top: topA, left: leftA, width: widthA, height: heightA }}
				/>
				<div
					className='rectangle b'
					style={{ top: topB, left: leftB, width: widthB, height: heightB }}
				/>
				<div className='verdict'>
					Colliding: <b>{`${isColliding}`}</b>
				</div>
			</div>
			<p>The Control Panel</p>
			<p>TODO: Capture the parameters for the rectangles using inputs</p>
		</div>
	);
}
