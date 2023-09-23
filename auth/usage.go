package auth

import (
	"chat/types"
	"chat/utils"
	"database/sql"
)

// Price Calculation
// 10 nio points = ¥1
// from 2023-9-6, 1 USD = 7.3124 CNY
//
// GPT-4 price (8k-context)
// Input					Output
// $0.03 	/ 1K tokens		$0.06 	/ 1K tokens
// ￥0.21 	/ 1K tokens		￥0.43 	/ 1K tokens
// 2.1 nio 	/ 1K tokens		4.3 nio / 1K tokens
//
// GPT-4 price (32k-context)
// Input					Output
// $0.06 	/ 1K tokens		$0.12 	/ 1K tokens
// ￥0.43 	/ 1K tokens		￥0.86 	/ 1K tokens
// 4.3 nio 	/ 1K tokens		8.6 nio / 1K tokens

// Dalle price (512x512)
// $0.018 / per image
// ￥0.13 / per image
// 1 nio / per image

func CountInputToken(model string, v []types.ChatGPTMessage) float32 {
	switch model {
	case types.GPT3Turbo:
		return 0
	case types.GPT3Turbo16k:
		return 0
	case types.GPT4:
		return float32(utils.CountTokenPrice(v, model)) / 1000 * 2.1
	case types.GPT432k:
		return float32(utils.CountTokenPrice(v, model)) / 1000 * 2.1 * 2
	default:
		return 0
	}
}

func CountOutputToken(model string, t int) float32 {
	switch model {
	case types.GPT3Turbo:
		return 0
	case types.GPT3Turbo16k:
		return 0
	case types.GPT4:
		return float32(t*utils.GetWeightByModel(model)) / 1000 * 4.3
	case types.GPT432k:
		return float32(t*utils.GetWeightByModel(model)) / 1000 * 8.6
	default:
		return 0
	}
}

func ReduceDalle(db *sql.DB, user *User) bool {
	if user.GetQuota(db) < 1 {
		return false
	}
	return user.UseQuota(db, 1)
}

func CanEnableModel(db *sql.DB, user *User, model string) bool {
	switch model {
	case types.GPT4, types.GPT40613, types.GPT40314:
		return user.GetQuota(db) >= 5
	case types.GPT432k, types.GPT432k0613, types.GPT432k0314:
		return user.GetQuota(db) >= 50
	default:
		return true
	}
}

func CanEnableModelWithSubscription(db *sql.DB, user *User, model string, useReverse bool) bool {
	if utils.Contains(model, types.GPT4Array) {
		if useReverse {
			return true
		}
	}
	return CanEnableModel(db, user, model)
}

func BuyQuota(db *sql.DB, user *User, quota int) bool {
	money := float32(quota) * 0.1
	if Pay(user.Username, money) {
		user.IncreaseQuota(db, float32(quota))
		return true
	}
	return false
}
