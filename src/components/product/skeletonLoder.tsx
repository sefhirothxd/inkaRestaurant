import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props: any) => (
	<ContentLoader
		speed={2}
		width={380}
		height={100}
		viewBox="0 0 380 100"
		backgroundColor="#f7d9d9"
		foregroundColor="#ecebeb"
		{...props}
	>
		<rect x="0" y="8" rx="30" ry="3" width="380" height="10" />
		<rect x="0" y="40" rx="30" ry="3" width="380" height="10" />
	</ContentLoader>
);

export default MyLoader;
