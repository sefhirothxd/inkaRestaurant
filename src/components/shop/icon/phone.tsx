import * as React from 'react';
import { SVGProps, memo } from 'react';
const PhoneIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="25"
		height="35"
		className="tel-icon pt-1"
		{...props}
	>
		<path
			fill="none"
			stroke="#00795b"
			strokeMiterlimit={10}
			strokeWidth={2}
			d="m19.489 16.585-3.738-1.408a2.359 2.359 0 0 0-2.3.435l-.931.78s-.327-.125-.76-.323-4.151-3.261-5.091-6.1l-.08-.271a11.692 11.692 0 0 1-.127-.476l.917-.8a2.358 2.358 0 0 0 .8-2.2l-.8-3.915c-1.713-3.181-5.383.673-5.383.673a7.446 7.446 0 0 0-.566 6.207c.02.112 1.111 5.962 8.273 10.858 2.041 1.611 4.981 3.021 8.266 1.748-.001-.001 4.392-3.011 1.52-5.208Z"
		/>
	</svg>
);
const Memo = memo(PhoneIcon);
export default Memo;
