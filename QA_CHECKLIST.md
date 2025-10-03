# QA Checklist: Budget Buddy

Manual testing steps for key features and edge cases.

## 1. Add Expense
- [ ] Add a valid expense (title, amount, category)
- [ ] Verify expense appears in the Recent Expenses list (newest first)
- [ ] Inputs clear after adding

## 2. Invalid Input
- [ ] Try to add with empty title (should show error)
- [ ] Try to add with non-numeric amount (should show error)
- [ ] Try to add with empty amount (should show error)

## 3. Persistence After Reload
- [ ] Add several expenses
- [ ] Close and reopen the app
- [ ] Verify all expenses persist and display correctly

## 4. Totals Update
- [ ] Add expenses in different categories
- [ ] Verify Total Spent and per-category totals update correctly
- [ ] Add/Remove expenses and check totals recalculate

## 5. Category Chips Selection
- [ ] Tap each category chip and verify selection changes
- [ ] Selected chip shows bold text and border
- [ ] Add expense with each category and verify correct assignment

## 6. Long Titles Truncation
- [ ] Add an expense with a very long title
- [ ] Verify title truncates visually (does not overflow card)

---

Test on both small and large screens. Check keyboard does not cover inputs. Confirm UI remains clean and usable throughout.
