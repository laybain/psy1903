# foundations_practice.R
# Name: Alaina Shaw
# Date: 2025-10-28
# Description: This script contains foundational R programming practice exercises,
# Taskset Week 9 

age <- 19
name <- 'Alaina' 
is_psych_major <- TRUE
favorite_numbers <- c(6, 12, 36, 42)

typeof(age)
class(age)
typeof(name)
class(name)
typeof(is_psych_major)
class(is_psych_major)
typeof(favorite_numbers)
class(favorite_numbers)


rt <- c(480, 530, 495, 610, 455, 390, 510, 565, 430, 500)

mean(rt)
sd(rt)

rt_adjusted <- (rt + 50) 
rt_adjusted

mean_diff <- mean(rt_adjusted) - mean(rt)
mean_diff 

rt <- c(480, 530, 495, 610, NA, 390, 510, 565, 430, 500)
mean(rt,na.rm = TRUE)

summary(rt)
str(rt)

experiment_data <- data.frame(
  subject_id = 1:10,
  rt = c(470, 360, 665, 400, 445, 270, 500, 565, 350, 445,
         275, NA, 600, 290, 560, 375, 450, 480, 325, 430),
  congruent = c(TRUE, TRUE, FALSE, TRUE, FALSE, TRUE, FALSE, FALSE, TRUE, FALSE),
  condition = c("control", "control", "incongruent", "control", "incongruent", "control", "incongruent", "incongruent", "control", "incongruent")
)

experiment_data

head(experiment_data) 
tail(experiment_data) 
summary(experiment_data) 
str(experiment_data)

experiment_data[3, 2]

experiment_data[data$rt>500,]

experiment_data[data$rt>500,]

experiment_data$rt[experiment_data$rt > 500]

experiment_data[1:5, c("subject_id", "rt")]

experiment_data[experiment_data$subject_id == 4, ]


experiment_data$condition

experiment_data[, "condition"]


fast_trials <- experiment_data[experiment_data$rt < 500, ]
incongruent_trials <- experiment_data[experiment_data$congruent == FALSE, ]
fast_incongruent <- experiment_data[experiment_data$rt < 500 & experiment_data$congruent == FALSE, ]

nrow(fast_trials)          
nrow(incongruent_trials)   
nrow(fast_incongruent) 


sapply(experiment_data, typeof) 
#Convert condition into a factor and verify with str().

experiment_data$condition <- as.factor(experiment_data$condition)

str(experiment_data)


sapply(experiment_data, typeof) 



#Mean RT by congruency: Compute the mean RT when congruent is TRUE and when it is FALSE

mean(experiment_data[experiment_data$congruent == TRUE, "rt"], na.rm = TRUE)
mean(experiment_data[experiment_data$congruent == FALSE, "rt"], na.rm = TRUE)

#Mean RT by condition type: Compute means for "control" and "incongruent" conditions.

mean_control <- mean(experiment_data[experiment_data$condition == "control", "rt"], na.rm = TRUE)
mean_incongruent <- mean(experiment_data[experiment_data$condition == "incongruent", "rt"], na.rm = TRUE)
mean_control
mean_incongruent


# Report which is faster and by how much.

mean_control - mean_incongruent

congruency_effect <- mean_control - mean_incongruent
print(paste("The congruency effect was", congruency_effect, "milliseconds."))



rt_mean <- mean(experiment_data$rt, na.rm = TRUE)
rt_sd <- sd(experiment_data$rt, na.rm = TRUE)

# Add z-score column
experiment_data$rt_z <- (experiment_data$rt - rt_mean) / rt_sd


head(experiment_data)


experiment_data$fast <- experiment_data$rt < 500
head(experiment_data)


new_row <- data.frame(
  subject_id = 11,
  rt = 470,
  congruent = TRUE,
  condition = "control",
  rt_z = NA,
  fast = TRUE
)

experiment_data <- rbind(experiment_data, new_row)
tail(experiment_data)

experiment_data$rt_z <- NULL
names(experiment_data)
