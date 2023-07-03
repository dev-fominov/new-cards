import { useEffect } from "react"
import { boolean, z } from "zod"
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { useActions } from "common/hooks"
import { authThunks } from "../auth.slice"
import s from "../styles.module.css"

const formSchema = z
	.object({
		email: z.string().email('Incorrect email'),
		password: z.string().min(8, 'The password is too short'),
		rememberMe: boolean(),
	})

type FormSchemaType = z.infer<typeof formSchema>



// if (isLoggedIn) {
// 	return <Navigate to={'/'} />
// }


export const SignIn = () => {

	const { signIn } = useActions(authThunks)

	const {
		register,
		handleSubmit,
		watch,
		setFocus,
		formState: { isDirty, isSubmitting, errors },
	} = useForm<FormSchemaType>({ resolver: zodResolver(formSchema) })
	const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
		signIn(data).unwrap()
			.catch((err) => {
				console.log(err)
			})
	}

	useEffect(() => {
		setFocus('email')
	}, [])

	return (
		<div>
			<div>Sign In</div>
			<form onSubmit={handleSubmit(onSubmit)}>

				<div className={s.itemInput}>
					<label htmlFor="email">Email</label>
					<input
						{...register("email", { required: true })}
						type="email"
						id="email"
						aria-invalid={errors.email ? 'true' : 'false'}
					/>
					{errors.email && (
						<span role='alert' className={s.error}>
							{errors.email?.message}
						</span>
					)}
				</div>
				<div className={s.itemInput}>
					<label htmlFor="password">Password</label>
					<input
						{...register("password", { required: true })}
						type="password"
						id="password"
						aria-invalid={errors.password ? 'true' : 'false'}
					/>
					{errors.password && (
						<span role='alert' className={s.error}>
							{errors.password?.message}
						</span>
					)}
				</div>

				<button
					type='submit'
					className={s.button}
					disabled={!isDirty || isSubmitting}
				>
					Sign In
				</button>

			</form>
		</div>
	)
}