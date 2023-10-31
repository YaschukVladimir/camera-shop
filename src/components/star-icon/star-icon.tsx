
type StarIconProps = {
  href: string;
}

function StarIcon({ href }: StarIconProps): React.JSX.Element {
  return (
    <svg width={17} height={16} aria-hidden="true" data-testid="star">
      <use xlinkHref={href} />
    </svg>
  );
}

export default StarIcon;
