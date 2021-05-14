import mongoose, { Schema, Document } from 'mongoose';

export interface Enemy {
  // type: EnemyType
  currentLife: Number;
}

export interface EnemyDocument extends Enemy, Document {}

export const enemySchema = new Schema<Enemy>({
  currentLife: Number,
});

export const EnemyModel = mongoose.model<EnemyDocument>('Enemy', enemySchema);
