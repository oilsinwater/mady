import propTypes from "prop-types";
import Image from "next/image";

export const NoteCover = ({ primary, alt, src, width, height }) => {
  return (
    <div className='NoteCover'>
      <Image
        src='https://via.placeholder.com/80x124.png'
        alt={alt}
        width={width}
        height={height}
        placeholder='blur'
        blurDataURL='../public/me.png'
      />
      <style jsx>
        {`
            .NoteCover {
                max-width: 80px
                max-height: 124px;
                width: 80px;
                height: 124px;
            }
        `}
      </style>
    </div>
  );
};

export const NoteCoverLarge = ({ secondary, alt, src, width, height }) => {
  return (
    <div className='NoteCoverLarge'>
      <Image
        src='https://via.placeholder.com/264x184.png'
        alt={alt}
        width={width}
        height={height}
        placeholder='blur'
        blurDataURL='../public/me.png'
      />
      <style jsx>
        {`
          .NoteCoverLarge {
            max-width: 264px;
            max-height: 184px;
            width: 264px;
            height: 184px;
          }
        `}
      </style>
    </div>
  );
};

NoteCover.propTypes = {
  primary: propTypes.bool,
  src: propTypes.string,
  alt: propTypes.string,
  width: propTypes.string,
  height: propTypes.string,
};

NoteCoverLarge.propTypes = {
  seconardy: propTypes.bool,
  src: propTypes.string,
  alt: propTypes.string,
  width: propTypes.string,
  height: propTypes.string,
};

NoteCover.defaultProps = {
  primary: false,
  src: "https://via.placeholder.com/80x124.png",
  alt: undefined,
  width: "80px",
  height: "124px",
};

NoteCoverLarge.defaultProps = {
  seconardy: false,
  src: "https://via.placeholder.com/80x124.png",
  alt: undefined,
  width: "264px",
  height: "184px",
};
