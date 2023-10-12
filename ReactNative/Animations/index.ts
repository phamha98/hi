const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
interface WalletCardProps {
    y: Animated.Value;
    index: number;
    type: Cards;
  }
  