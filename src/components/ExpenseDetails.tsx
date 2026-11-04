import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import type { Expense } from '@/types';

type ExpenseDetailsProps = {
  expense: Expense;
};

export default function ExpenseDetails({ expense }: ExpenseDetailsProps) {
  return (
    <ScrollView>
      {expense.receiptUrl ? (
        <Image source={{ uri: expense.receiptUrl }} style={styles.image} />
      ) : null}
      <View style={styles.content}>
        <Text style={styles.title}>{expense.title}</Text>
        <Text style={styles.amount}>{expense.amount.toFixed(2)} KM</Text>
        <Text>Category: {expense.category}</Text>
        <Text>Date: {expense.date}</Text>
        {expense.note ? <Text>Note: {expense.note}</Text> : null}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: { width: '100%', height: 260 },
  content: { padding: 16, gap: 8 },
  title: { fontSize: 24, fontWeight: 'bold' },
  amount: { fontSize: 20 },
});