import { ScrollView, StyleSheet, Text } from 'react-native';
import ExpenseCard from '@/components/ExpenseCard';
import { expenses } from '@/data/expenses';

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Text>{expenses.length} expenses</Text>
      {expenses.map((expense) => (
        <ExpenseCard key={expense.id} expense={expense} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { padding: 16, gap: 12 },
});