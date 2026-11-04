import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import type { Expense } from '@/types';

type ExpenseCardProps = {
  expense: Expense;
};

export default function ExpenseCard({ expense }: ExpenseCardProps) {
  return (
    <Pressable
      onPress={() => console.log('Open', expense.id)}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      {expense.receiptUrl ? (
        <Image source={{ uri: expense.receiptUrl }} style={styles.image} />
      ) : null}
      <View style={styles.text}>
        <Text style={styles.title}>{expense.title}</Text>
        <Text>
          {expense.category} · {expense.amount.toFixed(2)} KM · {expense.date}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { borderRadius: 12, overflow: 'hidden', backgroundColor: '#E6EEF7' },
  pressed: { opacity: 0.6 },
  image: { width: '100%', height: 160 },
  text: { padding: 12, gap: 4 },
  title: { fontWeight: 'bold', fontSize: 16 },
});