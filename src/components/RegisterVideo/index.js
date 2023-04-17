import { useEffect, useState } from "react";
import { StyledRegisterVideo } from "./styles";
// import Button from '';

function useForm(propsDoForm) {
  const [values, setValues] = useState(propsDoForm.initialValues);

  return {
    values,
    handleChange: (e) => {
      const value = e.target.value;
      const name = e.target.name;
      setValues({
        ...values,
        [name]: value,
      });
    },
    clearForm() {
      setValues({});
    },
  };
}

export default function RegisterVideo() {
  const formCadastro = useForm({
    initialValues: { titulo: "", slug: "", email: "", desc: "" },
  });

  const [formVisivel, setFormVisivel] = useState(false);

  return (
    <StyledRegisterVideo>
      <button
        className="add-video"
        onClick={() => {
          setFormVisivel(true);
        }}
      >
        +
      </button>
      {formVisivel ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setFormVisivel(false);
            formCadastro.clearForm();
          }}
        >
          <div>
            <button
              className="close-modal"
              onClick={() => {
                setFormVisivel(false);
              }}
            >
              X
            </button>
            <label>Insita o Titulo do Item que sera cadastrado</label>
            <input
              placeholder="Título do item"
              value={formCadastro.values.titulo}
              name="Titulo"
              onChange={formCadastro.handleChange}
            />
            <label>
              Confirme o Titulo para que não aja erros no cadastramento, utilize
              - no lugar dos espaços em brancos
            </label>
            <input
              placeholder="Confirme o titulo utilizando"
              value={formCadastro.values.slug}
              name="slug"
              onChange={formCadastro.handleChange}
            />
            <label>
              Insire vosso e-mail para quem desejar seu produto possa entrar em
              contato para trocalo por outro
            </label>
            <input
              type="email"
              placeholder="Example@example.com"
              name="email"
              value={formCadastro.values.email}
              onChange={formCadastro.handleChange}
            />
            <label>Insira uma descrição do produto</label>
            <textarea
              rows="4"
              cols="50"
              value={formCadastro.values.desc}
              name="text-area"
              onChange={formCadastro.handleChange}
            />
            <button type="submit">Cadastrar Produto</button>
          </div>
        </form>
      ) : (
        false
      )}
    </StyledRegisterVideo>
  );
}