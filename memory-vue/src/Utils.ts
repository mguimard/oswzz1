import type Card from './Card'

export default class Utils {
  static shuffle<T>(arr: T[]): T[] {
    return arr.sort((a, b) => (Math.random() > 0.5 ? 1 : -1))
  }

  static delay(n: number): Promise<void> {
    return new Promise(resolve => {
      setTimeout(() => resolve(), n)
    })
  }

  static createCard(color: string): Card {
    return {
      color: color,
      revealed: false,
    }
  }
}
