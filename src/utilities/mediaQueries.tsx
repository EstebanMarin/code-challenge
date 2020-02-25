interface MediaQuery {
  custom: (maxWidth: number) => string;
  desktop: string;
  tablet: string;
  phone: string;
}

const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;

export const media: MediaQuery = {
  custom: customMediaQuery,
  desktop: customMediaQuery(922),
  tablet: customMediaQuery(768),
  phone: customMediaQuery(576)
};
