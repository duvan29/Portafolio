import { useTranslations } from 'next-intl';
import CardReviews from './CardReviews';

export default function Reviews() {
  const t = useTranslations("Reviews");

  return (
    <div className="w-full pt-5 flex justify-between items-center">
      <CardReviews
        review={{
          reviewText: t("reviews.Card1.reviewText"),
          userName: t("reviews.Card1.userName"),
          userRole: t("reviews.Card1.userRole"),
          Imagen: t("reviews.Card1.Imagen"),
        }}
      />
      <CardReviews
        review={{
          reviewText: t("reviews.Card2.reviewText"),
          userName: t("reviews.Card2.userName"),
          userRole: t("reviews.Card2.userRole"),
          Imagen: t("reviews.Card2.Imagen"),
        }}
      />
      <CardReviews
        review={{
          reviewText: t("reviews.Card3.reviewText"),
          userName: t("reviews.Card3.userName"),
          userRole: t("reviews.Card3.userRole"),
          Imagen: t("reviews.Card3.Imagen"),
        }}
      />
      <CardReviews
        review={{
          reviewText: t("reviews.Card4.reviewText"),
          userName: t("reviews.Card4.userName"),
          userRole: t("reviews.Card4.userRole"),
          Imagen: t("reviews.Card4.Imagen"),
        }}
      />
    </div>
  );
}
