import {
  HomepageImage,
  HomepageImageContainer,
  HomepageImageWrapper,
} from "../styled/HomepageStyled";

interface ProfileImageProps {
  imageSrc: string;
  imageAlt: string;
  rotationAngle: number;
}

const ProfileImage = ({
  imageSrc,
  imageAlt,
  rotationAngle,
}: ProfileImageProps) => {
  return (
    <HomepageImageContainer>
      <HomepageImageWrapper $rotationangle={rotationAngle}>
        <HomepageImage src={imageSrc} alt={imageAlt} />
      </HomepageImageWrapper>
    </HomepageImageContainer>
  );
};

export default ProfileImage;
