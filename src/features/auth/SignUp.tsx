import { useEffect } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Navigate } from 'react-router-dom'
import { z } from 'zod'

import { authThunks } from './auth.slice'
import s from './styles.module.css'

import { useActions, useAppSelector } from 'common/hooks'

const formSchema = z
  .object({
    email: z.string().email('Incorrect email'),
    password: z.string().min(7, 'The password is too short'),
    confirmPassword: z.string().min(7, 'Repeat password'),
  })
  .refine(data => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'The entered passwords do not match',
  })

type FormSchemaType = z.infer<typeof formSchema>

export const SignUp = () => {
  const { signUp, initializeApp } = useActions(authThunks)

  const isLoggedIn = useAppSelector<boolean>(state => state.auth.isLoggedIn)

  const {
    register,
    handleSubmit,
    watch,
    setFocus,
    formState: { isDirty, isSubmitting, errors },
  } = useForm<FormSchemaType>({ resolver: zodResolver(formSchema) })
  const onSubmit: SubmitHandler<FormSchemaType> = data => {
    const value = {
      email: data.email,
      password: data.password,
    }

    signUp(value)
      .unwrap()
      .catch(err => err)
  }

  useEffect(() => {
    setFocus('email')
  }, [])

  if (isLoggedIn) {
    return <Navigate to={'/'} />
  }

  return (
    <div>
      <div>Sign Up</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.itemInput}>
          <label htmlFor="email">Email</label>
          <input
            {...register('email', { required: true })}
            type="email"
            id="email"
            aria-invalid={errors.email ? 'true' : 'false'}
          />
          {errors.email && (
            <span role="alert" className={s.error}>
              {errors.email?.message}
            </span>
          )}
        </div>
        <div className={s.itemInput}>
          <label htmlFor="password">Password</label>
          <input
            {...register('password', { required: true })}
            type="password"
            id="password"
            aria-invalid={errors.password ? 'true' : 'false'}
          />
          {errors.password && (
            <span role="alert" className={s.error}>
              {errors.password?.message}
            </span>
          )}
        </div>
        <div className={s.itemInput}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            {...register('confirmPassword', { required: true })}
            type="password"
            id="confirmPassword"
            aria-invalid={errors.confirmPassword ? 'true' : 'false'}
          />
          {errors.confirmPassword && (
            <span role="alert" className={s.error}>
              {errors.confirmPassword?.message}
            </span>
          )}
        </div>

        <button type="submit" className={s.button} disabled={!isDirty || isSubmitting}>
          Sign Up
        </button>
      </form>
    </div>
  )
}
