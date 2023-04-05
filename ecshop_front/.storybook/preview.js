import Image from 'next/image';


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },


}
Image.propTypes = {
	unoptimized: null,
  };
  
  Image.defaultProps = {
	unoptimized: true,
  };
  