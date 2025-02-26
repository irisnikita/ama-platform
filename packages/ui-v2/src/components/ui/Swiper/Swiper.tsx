// Libraries
import {
  Swiper as AntdSwiper,
  type SwiperProps as AntdSwiperProps,
} from "antd-mobile";

export interface SwiperProps extends AntdSwiperProps {}

const BaseSwiper: React.FC<SwiperProps> = (props) => {
  return <AntdSwiper {...props} />;
};

export const Swiper = BaseSwiper as React.FC<SwiperProps> & {
  Item: typeof AntdSwiper.Item;
};

Swiper.Item = AntdSwiper.Item;
